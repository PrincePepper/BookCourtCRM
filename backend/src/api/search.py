from typing import List, Optional

import numpy
from fastapi import APIRouter
from fastapi import Depends
from fastapi import Response
from fastapi import status
from sklearn.feature_extraction.text import TfidfVectorizer

from ..database import get_session, Session
from ..models.auth import Company
from ..models.books import Book, BookCreate, BookUpdate
from ..services.auth import get_current_user
from ..services.books import BooksService
import nltk
import pymorphy2
from typing import List

from nltk.corpus import stopwords

nltk.download('stopwords')
nltk.download('punkt')

# from sklearn.feature_extraction.text import TfidfVectorizer
from numpy.linalg import norm
numpy.seterr(divide='ignore', invalid='ignore')

router = APIRouter(
    prefix="/search"
)


@router.post("/")
def create_book(
        strr: str,
        company: Company = Depends(get_current_user),
        service: BooksService = Depends(),
        session: Session = Depends(get_session)
):
    local_descriptions = []
    for i in service.get_desciption(company_id=company.id):
        local_descriptions.append(i[0])

    def preprocess_corpus(corpus: List[str]):
        russian_stopwords = stopwords.words("russian")
        tokenized_corpus = [[token for token in nltk.word_tokenize(str(document).lower()) if
                             token not in russian_stopwords and token.isalnum()] for document in corpus]

        morph = pymorphy2.MorphAnalyzer()
        lemmatized_corpus = [[morph.parse(token)[0].normal_form for token in document] for document in tokenized_corpus]
        preprocessed_corpus = [" ".join(tokens) for tokens in lemmatized_corpus]

        return preprocessed_corpus

    preprocessed_descriptions = preprocess_corpus(local_descriptions)
    print(preprocessed_descriptions)
    f = open('xyz.txt', 'w')
    for i in preprocessed_descriptions:
     f.write(i+"\n")
    query = strr
    query = [query]
    preprocessed_query = preprocess_corpus(query)

    def search_books(query: List[str], descriptions: List[str], descriptions_ids: List[int]):
        corpus = query + descriptions

        tfIdfVectorizer = TfidfVectorizer(use_idf=True)
        tfIdf = tfIdfVectorizer.fit_transform(corpus).toarray()

        query_vector = tfIdf[0]
        descriptions_vectors = tfIdf[1:]
        a=numpy.dot(descriptions_vectors, query_vector)
        b=norm(descriptions_vectors, axis=-1) * norm(query_vector)

        cosine_similarity = a / b

        sorted_similarity = cosine_similarity.argsort()[::-1]

        result = numpy.array(descriptions_ids)[sorted_similarity]

        return list(result)

    ids = []
    for i in service.get_ids(company_id=company.id):
        ids.append(int(i[0]))
    descriptions_ids = ids
    # ищем книги

    preprocessed_descriptions=[]
    with open('xyz.txt', 'r') as f:
        aaa=f.readlines()
        for i in aaa:
            preprocessed_descriptions.append(i)
    f.close()

    searched_books = search_books(preprocessed_query, preprocessed_descriptions, descriptions_ids)
    ind = []
    for j, i in enumerate(searched_books):
        if j > 5: break
        ind.append(int(i))
    recomend_book=[]
    for i in ind:
        recomend_book.append(service.get(company_id=company.id, book_id=i))

    return recomend_book

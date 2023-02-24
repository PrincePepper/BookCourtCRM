import Vuex from 'vuex'
import axios from 'axios'

export default new Vuex.Store({
    state: {
        books: []
    },
    mutations: {
        ADD_BOOK(state, books) {
            state.books = books.slice(0, 100);
            // state.books = books;
        },
    },
    actions: {
        GET_BOOKS_FROM_API({commit}) {
            return axios('http://localhost:8000/books', {
                method: "GET",
                headers: {
                    // Set your Authorization to 'JWT', not Bearer!!!
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzcyNTYyNzUsIm5iZiI6MTY3NzI1NjI3NSwiZXhwIjoyNjc3MjU2Mjc0LCJzdWIiOiIxIiwiY29tcGFueSI6eyJjb21wYW55X25hbWUiOiJ0ZXN0MSIsImVtYWlsIjoidGlAdGkuY29tIiwicGhvbmVfbnVtYmVyIjoiODk5OTIzMjMyMzIiLCJhZGRyZXNzIjoiXHUwNDE3XHUwNDM1XHUwNDNjXHUwNDNiXHUwNDRmIiwiY3JlYXRlZF9hdCI6MSwiaWQiOjF9fQ.c5TRdXOz1GcRSsvQcLsjlbuOBiCjsQQUzYtWvutNG1s',
                    'Content-Type': 'application/json'
                },
            })
                .then((books) => {
                    commit('SET_BOOKS_TO_STATE', books.data);
                    return books;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
    },
    getters: {
        books: state => state.books
    }
});

<template>
  <div class='Catalog'>
    <div class="Catalog-list">
      <!--      <CatalogBook-->
      <!--          v-for="book in books"-->
      <!--          :key="book.id"-->
      <!--          :book_data="book"-->
      <!--      />-->
      <div v-for="book in books"
           :key="book.id"
           style="position: relative;width: 100%;">
        <div class="summary entry-summary">
          <img width="475" height="700"
               :src="book.image_link">
          <h2 class="single-post-title product_title entry-title" itemprop="name">{{ book.title }} </h2>
          <p class="price"><span class="woocommerce-Price-amount amount"><span>страниц: </span><bdi>{{
              book.number_page
            }}</bdi></span></p>
          <div class="woocommerce-product-details__short-description">
            <p>{{ book.description }}</p>
          </div>
          <p class="stock in-stock">{{ book.genre }}</p>


        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'CatalogMain',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'books'
    ])
  },
  methods: {
    ...mapActions([
      'GET_BOOKS_FROM_API'
    ])
  },
  mounted() {
    this.GET_BOOKS_FROM_API()
        .then((response) => {
          if (response.data) {
            this.$store.commit('ADD_BOOK', response.data)
            // this.SET_BOOKS_TO_STATE("book",response.data)
            console.log(response.data)
            console.log(this.books)
          }
        })
  }
}
</script>

<style lang="scss">
.Catalog {
  background: #f9e7c9;

  &-list {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: left;
  }
}

hr {
  border: none; /* Убираем границу */
  background-color: #003dff; /* Цвет линии */
  color: #0017ff; /* Цвет линии для IE6-7 */
  height: 2px; /* Толщина линии */
  margin-bottom: 50px;
}
</style>
  
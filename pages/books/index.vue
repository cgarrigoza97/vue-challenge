<template>
  <page-with-title title="Books">
    <div v-if="loading" class="w-full h-full flex justify-center items-center">
      <main-title title="Loading..."/>
    </div>

    <div v-if="!loading && GET_BOOKS.length > 0" class="w-full mt-5">
      <book-card 
        v-for="book in GET_BOOKS" 
        :key="book.key" 
        :title="book.title" 
        :author="book.author_name" 
        :bookKey="book.key"
        class="mb-5"
      />
    </div>

    <div v-if="!loading && GET_BOOKS.length === 0" class="w-full h-full flex justify-center items-center">
      <main-title title="No books found"/>
    </div>
  </page-with-title>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BookCard from '~/components/BookCard.vue'
import PageWithTitle from '~/components/PageWithTitle.vue'
import MainTitle from '~/components/MainTitle.vue';

export default {
  components: { MainTitle, BookCard, PageWithTitle },
  async created() {
    await this.FETCH_BOOKS()
  },
  computed: {
    ...mapGetters(['GET_LOADING', 'GET_BOOKS']),
    loading() {
      return this.GET_LOADING
    }
  },
  methods: {
    ...mapActions(['FETCH_BOOKS'])
  }
}
</script>

<style>

</style>
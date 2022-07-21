<template>
  <page-with-title v-if="book" :title="book.title">
    <book-card class="my-5" :author="book.author_name" :bookKey="book.key" :title="book.title" :hide-detail-btn="true"/>

    <h1 class="font-bold text-xl mb-2">Details</h1>  

    <h1 class="font-bold">Publish Date</h1>
    <ul class="list-disc ml-10 mb-2">
      <li v-for="date in book.publish_date.slice(0,5)" :key="date" >{{ date }}</li>
    </ul>

    <h1 class="font-bold">Publishers</h1>
    <ul class="list-disc ml-10 mb-2">
      <li v-for="publisher in book.publisher.slice(0,5)" :key="publisher" >{{ publisher }}</li>
    </ul>  

    <h1 class="font-bold">Number of pages: {{ book.number_of_pages_median }}</h1>
  </page-with-title>

  <page-with-title v-else :title="$route.params.id">
    <div class="w-full h-full flex justify-center items-center">
      <main-title title="Book does not exists"/>
    </div>
  </page-with-title>

</template>

<script>
import { mapGetters } from 'vuex'
import BookCard from '~/components/BookCard.vue'
import PageWithTitle from '~/components/PageWithTitle.vue'

export default {
  components: { PageWithTitle, BookCard },
  computed: {
    ...mapGetters(['GET_BOOKS']),
    book() {
      const bookKey = "/works/" + this.$route.params.id
      return this.GET_BOOKS.find(b => b.key === bookKey)
    }
  }
}
</script>

<style>

</style>
<template>
  <page-with-title title="Favorites">
    <div v-if="GET_FAVORITES.length > 0" class="w-full mt-5">
      <book-card 
        v-for="book in GET_FAVORITES" 
        :key="book.key" 
        :title="book.title" 
        :author="book.author_name" 
        :bookKey="book.key"
        class="mb-5"
      />
    </div>

    <div v-if="GET_FAVORITES.length === 0" class="w-full h-full flex justify-center items-center">
      <main-title title="Empty"/>
    </div>
  </page-with-title>
</template>

<script>
import { mapGetters } from 'vuex'
import BookCard from '~/components/BookCard.vue'
import PageWithTitle from '~/components/PageWithTitle.vue'

export default {
  components: { BookCard, PageWithTitle },
  computed: {
    ...mapGetters(['GET_FAVORITES']),
  }
}
</script>

<style>

</style>
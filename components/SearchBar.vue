import { Filter } from '../interfaces/Filter';
<template>
  <div class="flex flex-col sm:flex-row justify-center">
    <input v-model="searchValue" type="text" placeholder="Search..."/>
    <select v-model="selectedFilter" class="sm:ml-2 sm:mt-0 mt-2 ">
      <option v-for="filter in filters" :key="filter.value" :value="filter.value">{{ filter.text }}</option>
    </select>
    <custom-button class="sm:ml-2 sm:mt-0 mt-2" text="Search" @click="searchBooks" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CustomButton from './CustomButton.vue'

export default {
  components: { CustomButton },
  name: 'SearchBar',
  data() {
    return {
      searchValue: "",
      selectedFilter: 'title',
      filters: [
        { text: 'Title', value: 'title' },
        { text: 'Author', value: 'author' },
        { text: 'Subject', value: 'subject' },
      ]
    }
  },
  methods: {
    ...mapMutations(['SET_SEARCH_TEXT', 'SET_FILTER']),
    searchBooks() {
      this.SET_SEARCH_TEXT(this.searchValue)
      this.SET_FILTER(this.selectedFilter)
      this.$router.push('/books')
    }
  }
}
</script>

<style>

</style>
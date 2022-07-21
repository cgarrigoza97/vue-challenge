<template>
  <div class="w-screen h-full bg-blue flex flex-col justify-center items-center">
    <main-title title="Search books" class="mb-5"/>
    <search-bar />
  </div>
</template>

<script>
import MainTitle from '~/components/MainTitle.vue'
import SearchBar from '~/components/SearchBar.vue'
export default {
  components: { MainTitle, SearchBar },}
</script>

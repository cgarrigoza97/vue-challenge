<template>
  <div class="w-full flex sm:flex-row flex-col justify-between border p-5">

    <div class="flex flex-col sm:max-w-[50%] max-w-full justify-around">
      <h1 class="truncate">Title: {{ title }}</h1>
      <h1>Author: {{ mainAuthor }}</h1>
    </div>

    <div class="flex flex-col sm:items-end items-center mt-5 sm:mt-0">
      <custom-button class="mb-5" :text="btnText" @click="addOrRemoveFav"/>
      <custom-button v-if="!hideDetailBtn" text="View details" @click="goToBookDetails"/>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import CustomButton from "./CustomButton.vue"

export default {
  components: { CustomButton },
  props: ['bookKey', 'title', 'author', 'hideDetailBtn'],
  computed: {
    ...mapGetters(['GET_FAVORITES']),
    mainAuthor() {
      return this.author[0]
    },
    isFavorite() {
      return !!!this.GET_FAVORITES.find(b => b.key === this.bookKey)
    },
    btnText() {
      return this.isFavorite ? 'Add to favorites' : 'Remove from favorites'
    }
  },
  methods: {
    ...mapMutations(['ADD_TO_FAVORITES', 'REMOVE_FROM_FAVORITES']),
    addOrRemoveFav() {
      console.log(this.bookKey)
      if (this.isFavorite)
        this.ADD_TO_FAVORITES(this.bookKey)
      else  
        this.REMOVE_FROM_FAVORITES(this.bookKey)
    },
    goToBookDetails() {
      const id = this.bookKey.split('/').slice(-1)
      this.$router.push('/books/' + id)
    }
  }
}
</script>

<style>

</style>
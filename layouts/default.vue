<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <Header />
    <main class="h-[calc(100vh-3.5rem)] w-full">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: { Header },

}
</script>

<style>

</style>
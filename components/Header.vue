<template>
  <header class="w-full h-14 bg-space-cadet flex items-center px-10">
    
    <h1 class="text-white text-xl font-bold cursor-pointer" @click="goToMain">Books</h1>

    <ul class="flex ml-10">
      <li>
        <nuxt-link to="/books/favorites" class="text-white text-md cursor-pointer">Favorites</nuxt-link>
      </li>
    </ul>

  </header>
</template>

<script>
export default{
  name: 'Header',
  methods: {
    goToMain() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="postcss">
@tailwind utilities;

.nuxt-link-active {
  color: theme('colors.space-cadet');
  background-color: white;
  padding: theme('spacing.5');
}

</style>
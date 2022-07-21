<template>
  <div class="w-full h-full flex flex-col items-start sm:px-20 px-2 pt-10">
    <main-title :title="title" />

    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>

</style>
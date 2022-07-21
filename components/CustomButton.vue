<template>
  <button class="bg-space-cadet text-white p-4" @click="onClick">{{ text }}</button>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>
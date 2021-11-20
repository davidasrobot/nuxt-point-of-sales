<template>
  <nuxt-link :to="to" class="w-full hover:bg-gray-200 h-16 flex items-center px-8">
    <span class="material-icons">
      {{ icon }}
    </span>
    <h4 class="ml-4">
      {{ name }}
    </h4>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'home'
    },
    name: {
      type: String,
      default: 'home'
    },
    to: {
      type: String,
      default: '/'
    }
  }
}
</script>

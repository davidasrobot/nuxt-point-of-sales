<template>
  <div class="w-full px-4 h-12 bg-blue-500 flex items-center fixed top-0 left-0 z-50">
    <button class="ml-auto focus:outline-none text-white" @click="show()">
      <span class="material-icons text-4xl">
        menu
      </span>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    show () {
      this.$store.commit('navigation/show')
    }
  }
}
</script>

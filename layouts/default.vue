<template>
  <div>
    <navigation />
    <navigation-bar />
    <div class="pt-14 lg:mx-80 relative">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Navigation from '~/components/Navigation/Navigation.vue'
export default {
  components: { Navigation },
  data () {
    return {

    }
  }
}
</script>

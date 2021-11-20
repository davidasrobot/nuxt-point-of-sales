<template>
  <div class="fixed w-full h-full top-0 bg-white z-50 transition-all duration-300" :class="show?'left-0':'left-full'">
    <button class="absolute top-0 right-4 focus:outline-none" @click="close()">
      <span class="material-icons text-4xl">
        close
      </span>
    </button>
    <div class="relative my-16 text-center">
      <div class="rounded-full mx-auto w-24 h-24 bg-gray-400">
        <img class="rounded-full" src="https://picsum.photos/200" alt="profile images">
      </div>
      <h4 class="mt-4 font-bold">
        nama_pengguna
      </h4>
      <h6 class="text-xs">
        teller
      </h6>
    </div>
    <div class="relative text-center">
      <navigation-menu v-for="(menu, index) in menus" :key="index" :icon="menu.icon" :name="menu.name" :to="menu.to" />
    </div>
  </div>
</template>
<script>
import NavigationMenu from './NavigationMenu.vue'
const listMenu = [
  {
    icon: 'toc',
    name: 'new orders',
    to: '/'
  },
  {
    icon: 'receipt_long',
    name: 'transactions',
    to: '/transactions'
  },
  {
    icon: 'inventory_2',
    name: 'products',
    to: 'products'
  }
]
export default {
  components: { NavigationMenu },
  data () {
    return {
      menus: listMenu
    }
  },
  computed: {
    show () {
      return this.$store.state.navigation.show
    }
  },
  methods: {
    close () {
      this.$store.commit('navigation/show')
    }
  }
}
</script>

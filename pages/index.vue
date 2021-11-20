<template>
  <div>
    <product-list
      v-for="(product, index) in products"
      :key="index"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :product-id="product.id"
    />
    <div v-if="carts && carts.length !== 0" class="text-center w-1/2 bg-blue-600 p-4 rounded-full fixed bottom-4 left-1/4 -translate-x-1/2 cursor-pointer hover:bg-blue-700 focus:bg-blue-700">
      <h4 class="text-white font-bold">
        charge - Rp. {{ $formatCurrencies(total) }}
      </h4>
    </div>
  </div>
</template>

<script>
import ProductList from '~/components/Product/ProductList.vue'
export default {
  components: { ProductList },
  data () {
    return {
      cart: []
    }
  },
  computed: {
    products () {
      return this.$store.state.products.products
    },
    carts () {
      return this.$store.state.cart.carts
    },
    total () {
      return this.$store.state.cart.total
    }
  }
}
</script>

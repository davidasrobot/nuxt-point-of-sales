<template>
  <div
    class="w-full py-4 px-8 bg-gray-100 hover:bg-gray-200 flex items-center cursor-pointer my-2"
    @click="addToCart({id:productId, name:name, price:price})"
  >
    <div>
      <h3 class="font-bold">
        {{ name }}
      </h3>
      <h6 class="text-xs">
        {{ description }}
      </h6>
    </div>
    <div class="ml-auto">
      <h3 class="font-bold">
        Rp. {{ $formatCurrencies(price) }}
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Nama Produk'
    },
    price: {
      type: Number,
      default: 30000
    },
    description: {
      type: String,
      default: 'lorem ipsum dolor, sit amet'
    },
    productId: {
      type: Number,
      default: 1
    }
  },
  methods: {
    addToCart (e) {
      this.$store.commit('cart/add', e)
    }
  }
}
</script>

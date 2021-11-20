export const state = () => ({
  carts: [],
  total: 0
})

export const mutations = {
  add (state, products) {
    const c = state.carts.find(element => element.id === products.id)
    if (c) {
      c.quantity = c.quantity + 1
    } else {
      state.carts.push({
        ...products,
        quantity: 1
      })
    }
    const abc = state.carts.map(x => x.quantity * x.price)
    this.commit('cart/updateTotal', abc.reduce((a, b) => a + b, 0))
  },
  updateTotal (state, total) {
    state.total = total
  }
}

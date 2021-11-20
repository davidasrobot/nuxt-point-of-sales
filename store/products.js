export const state = () => ({
  products: productLists
})

export const mutations = {
  add (state) {
    state.products = state.products.add()
  },
  delete (state, data) {
    // state.products.remove()
  }
}

const productLists = [
  {
    id: 1,
    name: 'mie dog dog',
    price: 25000,
    description: 'lorem ipsum, lorem lorem, ipsum.'
  },
  {
    id: 2,
    name: 'ayam goreng',
    price: 15000,
    description: 'lorem ipsum, lorem lorem, ipsum.'
  },
  {
    id: 3,
    name: 'mie goreng',
    price: 8000,
    description: 'lorem ipsum, lorem lorem, ipsum.'
  },
  {
    id: 4,
    name: 'mie rebus',
    price: 8000,
    description: 'lorem ipsum, lorem lorem, ipsum.'
  }
]

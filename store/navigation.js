export const state = () => ({
  show: false
})

export const mutations = {
  show (state) {
    state.show = !state.show
  }
}

export const state = () => ({
  showNav: false,
  showRightSide: false,
  showLeftSide: false,
})

export const mutations = {
  toogleShowNav(state) {
    state.showNav = !state.showNav
  },
  toogleRightSide(state) {
    state.showRightSide = !state.showRightSide
    // state.showLeftSide = state.showRightSide ? false : state.showLeftSide
  },
  toogleLeftSide(state) {
    state.showLeftSide = !state.showLeftSide
    // state.showRightSide = state.showLeftSide ? false : state.showRightSide
  },
}

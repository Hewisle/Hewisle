import { ActionTree } from 'vuex';
import { StateModel, StoreModel } from './state';
import { COLORS } from 'src/constants/spaceship';
import { Cookies } from 'quasar';

const actions: ActionTree<StateModel, StoreModel> = {
  initialize({ commit }, Cookies: Cookies) {
    if (Cookies.has('spaceship')) {
      commit('readCookie', Cookies.get('spaceship'))
    }
  },
  changeColor({ commit, state }, next = true) {
    const currentColorIndex = COLORS.indexOf(state.color);
    if (!next && currentColorIndex <= 0) {
      commit('setColor', COLORS[COLORS.length - 1])
    } else if (!next) {
      commit('setColor', COLORS[currentColorIndex - 1])
    } else if (currentColorIndex === COLORS.length - 1) {
      commit('setColor', COLORS[0])
    } else {
      commit('setColor', COLORS[currentColorIndex + 1])
    }
  }
};

export default actions;

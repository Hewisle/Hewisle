import { MutationTree } from 'vuex';
import { StateModel } from './state';
import { TYPE, COLOR } from 'src/constants/spaceship';
import { Cookies } from 'quasar';

const writeCookie = (state: StateModel) => {
  Cookies.set('spaceship', JSON.stringify(state), { secure: true })
}

const mutation: MutationTree<StateModel> = {
  readCookie(state, payload: StateModel) {
    Object.assign(state, payload)
  },
  setName(state, payload: string) {
    state.name = payload;
    writeCookie(state)
  },
  setColor(state, payload: COLOR) {
    state.color = payload;
    writeCookie(state)
  },
  setType(state, payload: TYPE) {
    state.type = payload;
    writeCookie(state)
  }
};

export default mutation;

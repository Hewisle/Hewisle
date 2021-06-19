import { MutationTree } from 'vuex';
import { StateModel } from './state';
import { TYPE, COLOR } from 'src/constants/spaceship';

const mutation: MutationTree<StateModel> = {
  setName(state, payload: string) {
    state.name = payload
  },
  setColor(state, payload: COLOR) {
    state.color = payload
  },
  setType(state, payload: TYPE) {
    state.type = payload
  }
};

export default mutation;

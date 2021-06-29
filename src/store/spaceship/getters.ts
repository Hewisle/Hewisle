import { GetterTree } from 'vuex';
import { StateModel, StoreModel } from './state';

const getters: GetterTree<StateModel, StoreModel> = {
  getId(state) {
    let id
    if (state.token) {
      const body = state.token.split('.')[1]
      if (body) {
        try {
          const obj = JSON.parse(atob(body)) as { id: string }
          if (obj) id = obj.id
        } catch {
          console.log('ID not found')
        }
      }
    }
    return id
  }
};

export default getters;

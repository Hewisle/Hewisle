import { Module } from 'vuex';
import { StoreModel } from '../index';
import state, { StateModel } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const SpaceshipModel: Module<StateModel, StoreModel> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default SpaceshipModel;
export type { StateModel as SpaceshipModel }

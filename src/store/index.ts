import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'
import { Cookies, LooseDictionary } from 'quasar'

import spaceship, { SpaceshipModel } from './spaceship'

export interface StoreModel {
  spaceship: SpaceshipModel
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StoreModel>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StoreModel>> = Symbol('vuex-key')

export default store(function ({ ssrContext } ) {
  const Store = createStore<StoreModel>({
    modules: {
      spaceship
    },
    strict: !!process.env.DEBUGGING
  })

  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext as LooseDictionary)
    : Cookies

  void Store.dispatch('spaceship/initialize', cookies)

  return Store;
})

export function useStore() {
  return vuexUseStore(storeKey)
}
import Vue from "vue";
import Vuex, { GetterTree, MutationTree, ActionTree } from "vuex";

import home from "../modules/home/store/index";

Vue.use(Vuex);

export const state = () => ({
  language: "ru",
  theme: "sun",
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {};

export const mutations: MutationTree<RootState> = {};

export const actions: ActionTree<RootState, RootState> = {};

const store = () =>
  new Vuex.Store({
    state: state(),
    getters,
    mutations,
    actions,
    modules: {
      home,
    },
  });

export default store;

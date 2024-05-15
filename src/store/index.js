import { createStore } from "vuex";
import recipe from './recipe';
import auth from './auth';
import createPersistedState from 'vuex-persistedstate'

export const store = createStore({

  modules: {
    recipe,
    auth
  }
})

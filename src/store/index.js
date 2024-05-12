import { createStore } from "vuex";
import recipe from './recipe';
import auth from './auth';
import createPersistedState from 'vuex-persistedstate'

export const store = createStore({
  plugins: [createPersistedState({
    key: 'user',
    paths: ['auth.isLogin', 'auth.token', 'auth.username'],
    fetchBeforeUse: true,
  })],
  modules: {
    recipe,
    auth
  }
})

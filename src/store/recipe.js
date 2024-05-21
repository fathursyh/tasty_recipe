import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      recipes: [],
      recipeDetail: {},
    }
  },
  getters: {},
  mutations: {
    setRecipeData(state, payload) {
      state.recipes = payload
    },
    setRecipeDetail(state, payload) {
      state.recipeDetail = payload
    },
  },
  actions: {
    async getRecipeData({ commit }) {
      try {
        const { data } = await axios.get(
          'https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe.json'
        )
        commit('setRecipeData', data);
      } catch (err) {
        console.log(err);
      }
    },
    async getRecipeDetail({ commit }, payload) {
      try {
          const { data } = await axios.get(
            `https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe/${payload - 1}.json`
          );
          sessionStorage.setItem('recipe', JSON.stringify(data));
          commit('setRecipeDetail', data);
        
      } catch (err) {
        console.log(err);
      }
    },
    async addNewRecipe({ rootState, dispatch, state }, payload) {
      await dispatch('getRecipeData')
      let objectId = 0
      if(state.recipes) {
        objectId = Object.entries(state.recipes).length;
      }
      const id = objectId + 1;
      const newData = {
        ...payload,
        username: rootState.auth.userLogin.username,
        id: id,
        createdAt: Date.now(),
        userId: rootState.auth.userLogin.userId,
      };
      try {
        const { data } = await axios.put(`https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe/${objectId}.json?auth=${rootState.auth.token}`, newData)
        await dispatch('getRecipeData');
      } catch (err) {
        console.log(err);
      };
    },
    async deleteRecipe({ rootState, dispatch}, payload) {
      try {
        const { data } = await axios.delete(`https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe/${payload-1}.json?auth=${rootState.auth.token}`);
        await dispatch('getRecipeData')
      } catch (err) {
        console.log(err);
      }
    },
    async updateRecipe({ dispatch, rootState }, {id, newRecipe}) {
      try {
        const { data } = await axios.put(`https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe/${id-1}.json?auth=${rootState.auth.token}`, newRecipe);
        await dispatch('getRecipeData');
      } catch(err) {
        console.log(err);
      };
    } 
  }
}
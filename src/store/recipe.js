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
    }
  },
  actions: {
    async getRecipeData({commit}) {
      try {
        const {data} = await axios.get(
          'https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe.json'
        )

        const arr = [];
        for (let key in data) {
          arr.push({id: key, ...data[key]})
        }

        commit ('setRecipeData', arr);
      } catch (err) {
        console.log(err);
      }
    },
    async getRecipeDetail({commit}, payload) {
      try {
        const {data} = await axios.get(
          `https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe/${payload-1}.json`
        );
        commit('setRecipeDetail', data);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
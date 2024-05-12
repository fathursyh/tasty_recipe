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
      if(!sessionStorage['recipes']) {
        sessionStorage.setItem('recipes', JSON.stringify(payload))
        sessionStorage.removeItem('recipe');
      }
    },
    setRecipeDetail(state, payload) {
      state.recipeDetail = payload
    }
  },
  actions: {
    async getRecipeData({commit}) {
      try {
        if (sessionStorage['recipes']) {
          const getRecipeFromSession = sessionStorage.getItem('recipes');
          const recipes = JSON.parse(getRecipeFromSession);
          commit('setRecipeData', recipes);
        } else {
            const {data} = await axios.get(
              'https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe.json'
            )

            const arr = [];
            for (let key in data) {
              arr.push({id: key, ...data[key]})
            }

            commit ('setRecipeData', arr);
          }
      } catch (err) {
        console.log(err);
      }
    },
    async getRecipeDetail({commit}, payload) {
      try {
        if(sessionStorage['recipes']) {
          const getRecipeFromSession = sessionStorage.getItem('recipes');
          const recipe = JSON.parse(getRecipeFromSession);
          commit('setRecipeDetail', recipe[payload-1])
        } else if(sessionStorage['recipe']) {
          const getRecipeFromSession = sessionStorage.getItem('recipe');
          const recipe = JSON.parse(getRecipeFromSession);
          commit('setRecipeDetail', recipe)
        } else {
          const {data} = await axios.get(
            `https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe/${payload-1}.json`
          );
          sessionStorage.setItem('recipe', JSON.stringify(data));
          commit('setRecipeDetail', data);
      }
      } catch (err) {
        console.log(err);
      }
    }
  }
}
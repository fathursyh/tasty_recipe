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
      sessionStorage.removeItem('recipe');
    },
    setRecipeDetail(state, payload) {
      state.recipeDetail = payload
    },
    setNewRecipe(state, payload) {
      state.recipes.push(payload);
    },
  },
  actions: {
    async getRecipeData({commit}) {
      try {
        if (sessionStorage['recipes']) {
          const recipes = JSON.parse(sessionStorage.getItem('recipes'));
          commit('setRecipeData', recipes);
        } else {
          const {data} = await axios.get(
            'https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe.json'
          )
          commit ('setRecipeData', data);
          sessionStorage.setItem('recipes', JSON.stringify(data));
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
    },
    async addNewRecipe({commit, rootState}, payload) {
      console.log(payload);
      const newData = {
        ...payload,
        username: rootState.auth.userLogin.username,
        createdAt: Date.now(),
        userId: rootState.auth.userLogin.userId,
      };
      try {
        const {data} = await axios.post(`https://tasty-recipe-e679a-default-rtdb.firebaseio.com/recipe.json?auth=${rootState.auth.token}`, newData)
        sessionStorage.clear();
        commit('setNewRecipe', {id: data.name, ...newData});
      } catch (err) {
        console.log(err);
      };
    }
  }
}
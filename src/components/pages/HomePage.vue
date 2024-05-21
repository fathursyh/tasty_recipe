<template>
  <div class="container-md my-5 py-5">
    <div class="recipe__title text-center">
      <h2>All Recipes</h2>
      <p style="font-size: 15px">
        Find and share everyday cooking inspirations on all recipes. Discover
        recipes, cooks, videos, and how-tos based on the food you love and the
        friends you follow.
      </p>
    </div>
    <recipe-list :recipes="allRecipes" v-if="recipeListStatus"></recipe-list>
  </div>
</template>

<script setup>
  import RecipeList from "../recipe/RecipeList.vue";
  import { computed, onMounted, ref } from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const recipeListStatus = ref(false);
  const recipeList = ref();

  onMounted(async () => {
    try {
      await store.dispatch("recipe/getRecipeData");
      recipeListStatus.value = true;
      recipeList.value = store.state.recipe.recipes;
    } catch (err) {
      console.log(err);
    }
  });

  const allRecipes = computed(() => {
    if (recipeList.value !== null) {
      return recipeList.value.filter(function (item) {
        return item !== null;
      });
    }
  });
</script>

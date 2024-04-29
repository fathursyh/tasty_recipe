<template>
  <div class="recipe__list-recipe-row">
    <div class="row flex-row">
      <recipe-card :recipes="recipeList"></recipe-card>
    </div>
  </div>
</template>

<script setup>
  import RecipeCard from "./RecipeCard.vue";
 
</script>

<template>
  <div class="recipe__list-recipe-row">
    <div class="row flex-row">
      <recipe-card></recipe-card>
      <recipe-card></recipe-card>
      <recipe-card></recipe-card>
      <recipe-card></recipe-card>
      <recipe-card></recipe-card>
      <recipe-card></recipe-card>
      <recipe-card></recipe-card>
      <recipe-card></recipe-card>
    </div>
  </div>
</template>

<script>
  import RecipeCard from './RecipeCard.vue'
  export default {
    components: {
      RecipeCard
    }
  }
</script>

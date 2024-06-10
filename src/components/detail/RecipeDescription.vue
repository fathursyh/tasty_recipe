<template>
    <div class="my-2 p-4 d-flex flex-column-reverse flex-lg-row justify-content-between border border-secondary-sublet rounded" style="background-color: #fff;">
      <div class="pe-lg-4">
        <h2>{{ recipe.name }}</h2>
        <p>
            {{ recipe.description }}
        </p>
  
        <!-- Phone Device -->
        <div class="d-flex d-lg-none flex-column justify-content-between border border-primary rounded bg-color-detail">
          <div class="w-75 my-3 pb-3 mx-auto pe-lg-4 ps-lg-3 border-bottom border-primary">
            <p class="my-0"><strong>Preptime</strong></p>
            <p class="my-0">{{ recipe.prepTime }} Mins</p>
          </div>
          <div class="w-75 px-lg-4 pb-3 mx-auto border-bottom border-primary">
            <p class="my-0"><strong>Cooktime</strong></p>
            <p class="my-0">{{ recipe.cookTime }} Mins</p>
          </div>
          <div class="w-75 my-3 mx-auto ps-lg-4 pe-3">
            <p class="my-0"><strong>Total</strong></p>
            <p class="my-0">{{ recipe.totalTime }} Mins</p>
          </div>
        </div>
  
        <!-- PC Device -->
        <div class="d-none d-lg-flex flex-lg-row justify-content-between border border-primary rounded bg-color-detail">
          <div class="w-75 my-3 pb-3 mx-auto pe-lg-4 ps-lg-3 border-end border-primary">
            <p class="my-0"><strong>Preptime</strong></p>
            <p class="my-0">{{ recipe.prepTime }} Mins</p>
          </div>
          <div class="w-75 my-3 px-lg-4 mx-auto border-end border-primary">
            <p class="my-0"><strong>Cooktime</strong></p>
            <p class="my-0">{{ recipe.cookTime }} Mins</p>
          </div>
          <div class="w-75 my-3 mx-auto ps-lg-4 pe-3">
            <p class="my-0"><strong>Total</strong></p>
            <p class="my-0">{{ recipe.totalTime }} Mins</p>
          </div>
        </div>
        <p class="my-3">Recipe By {{ recipe.username }}</p>
        <div>
          <button class="btn fav-btn px-3 py-2 rounded-pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg> Add To Favorite
          </button>
        </div>
      </div>
      <div class="ps-lg-4">
        <img :src="recipe.imageLink" alt="Food" class="recipe__detail-img rounded mx-auto w-100" style="object-fit: cover;"/>
      </div>
    </div>
  </template>

<script setup>
    import { computed, reactive } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const recipeDetail = computed(() => {
        return store.state.recipe.recipeDetail
    });
    recipeDetail.forEach((element)=>{
      console.log(element);
    })
    const recipe = reactive(recipeDetail)

</script>

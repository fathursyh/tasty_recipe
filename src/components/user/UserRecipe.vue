<template>
  <ul class="list-group">
    <li class="list-group-item">
      <div
        class="d-flex flex-sm-row flex-column justify-content-between align-items-sm-center"
      >
        <div class="mb-3 mb-sm-0">
          <p class="my-0 fs-4 fw-semibold">My Recipe</p>
          <p class="my-0 text-secondary">Add your original recipe here</p>
        </div>
        <div>
          <button class="btn add-btn px-3 py-2 rounded-pill">
            <router-link
              to="/new-recipe"
              class="text-decoration-none text-light"
            >
              Add Recipe
            </router-link>
          </button>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <p class="mt-2 mb-4 fs-5 fw-semibold">Recipe</p>
      <div class="row">
        <user-recipe-card
          v-for="recipe in recipes"
          :key="recipe[1].id"
          :recipe="recipe[1]"
          :buttonName="['Delete', 'Edit']"
          @btnRemove="deleteRecipe(recipe[1].id)"
          @btnEdit="editRecipe(recipe[1].id)"
        >
          <p>{{ new Date(recipe[1].createdAt).toDateString() }}</p>
        </user-recipe-card>
      </div>
    </li>
  </ul>
</template>


<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import UserRecipeCard from "./UserRecipeCard.vue";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const recipes = computed(() => {
  const allRecipe = store.state.recipe.recipes;
  const userId = store.state.auth.userLogin.userId;
  const userRecipe = Object.entries(allRecipe);
  return userRecipe
    .filter((recipe) => recipe[1] !== null)
    .filter((recipe) => recipe[1].userId === userId);
});

const deleteRecipe = async (id) => {
  await store.dispatch("recipe/deleteRecipe", id);
};

const editRecipe = (id) => {
  router.push(`/edit/${id}`);
};
</script>

<template>
    <li class="list-group-item">
      <form @submit.prevent="addNewRecipe">
        <!-- General Information Start -->
        <div>
          <p class="my-3 fs-5 fw-semibold">General Information</p>
          <div>
            <!-- Image Start -->
            <div class="mb-3"> <base-input
                type="file"
                id="recipeImage"
                label="Photo Recipe"
                @input="checkImage"
                ></base-input> </div>
            <!-- Image End -->
  
            <!-- Recipe Title Start -->
            <div class="mb-3"> <base-input
                type="text"
                id="recipeTitle"
                placeholder="Give your recipe a title"
                label="Recipe Title"
                v-model="recipeData.name"
                ></base-input> </div>
            <!-- Recipe Title  End -->
  
            <!-- Recipe Description Start -->
            <div class="mb-3"> <base-text-area
                id="recipeDescription"
                label="Description"
                placeholder="Share story behind recipe"
                v-model="recipeData.description"
                ></base-text-area> </div>
            <!-- Recipe Description End -->
  
            <!-- Recipe Cateogry Start -->
            <div class="mb-3"> <base-select
                :data="['Breakfast', 'Lunch', 'Dinner', 'Meals', 'Snacks']"
                id="recipeCategory"
                v-model="recipeData.category"
                ></base-select> </div>
            <!-- Recipe Category End -->
          </div>
        </div>
        <!-- General Information End -->
  
        <!-- Time Setting Start -->
        <div class="border-top py-1">
          <p class="my-3 fs-5 fw-semibold">Time Setting</p>
          <div>
            <!-- Preparation Time Start -->
            <div class="mb-3"> <base-input
                type="number"
                id="prepTime"
                placeholder="0"
                label="Prep Time"
                v-model="recipeData.prepTime"
                ></base-input> </div>
            <!-- Preparation Time End -->
  
            <!-- Cook Time Start -->
            <div class="mb-3"> <base-input
                type="number"
                id="cookTime"
                placeholder="0"
                label="Cook Time"
                v-model="recipeData.cookTime"
                ></base-input> </div>
            <!-- Cook Time End -->
            
            <!-- Total Time Start -->
            <div class="mb-3"> <base-input
                type="number"
                id="totalTime"
                placeholder="0"
                label="Total Time"
                v-model="recipeData.totalTime"
                @totalTimeFocus="totalTime" readonly
                ></base-input> </div>
            <!-- Total Time End -->
          </div>
        </div>
        <!-- Time Setting End -->
  
        <!-- Ingredients Start -->
        <div class="border-top py-1">
          <p class="my-3 fs-5 fw-semibold">Ingredients</p>
          <p>
            Enter one ingredient per line. Include the quantity (i.e. cups,
            tablespoons) and any special preparation (i.e. sifted, softened,
            chopped). Use optional headers to organize the different parts of the
            recipe (i.e. Cake, Frosting, Dressing).
          </p>
          <div>
            <div class="mb-3 row" v-for="count in ingredientCount" :key="count">
              <!-- Ingredient Input Start -->
              <div class="col-lg-11 col-11"> <base-input
                type="text"
                id="ingredient"
                label="Ingredients"
                placeholder="Ex: 1 cup of sugar"
                v-model="recipeData.ingredients[count-1]"
                ></base-input> </div>
              <!-- Ingredient Input End -->
              <div
                class="col-lg-1 col-1 col-form-label align-self-end delete-ingredient"
                style="color: #cb3a31;"
                v-if="ingredientCount > 1" @click="removeIngredient(count-1)"
              >
                <i class="fa-regular fa-trash-can px-1"></i
                ><span class="d-none d-md-inline" style="cursor: pointer;">Delete</span>
              </div>
            </div>
          </div>
          <!-- Add More Button Start -->
          <base-button
            class="new-ingredient-btn px-3 py-2"
            type="button"
            @clickButton="addIngredient"
          >Add More</base-button>
          <!-- Add More Button Start -->
        </div>
        <!-- Ingredients End -->
  
        <!-- Direction Start -->
        <div class="border-top my-3">
          <p class="my-3 fs-5 fw-semibold">Directions</p>
          <p>
            Explain how to make your recipe, including oven temperatures, baking
            or cooking times, and pan sizes, etc. Use optional headers to organize
            the different parts of the recipe
          </p>
          <div>
            <div class="mb-3 row" v-for="count in directionCount" :key="count">
              <!-- Direction Input Start -->
              <div class="col-lg-11 col-11"> <base-input
                    type="text"
                    id="direction"
                    label="Directions"
                    placeholder="Ex: Heat a pan at 100 degrees"
                    v-model="recipeData.directions[count-1]"
                ></base-input> </div>
               <!-- Direction Input End -->
              <div
                class="col-lg-1 col-1 col-form-label align-self-end delete-ingredient"
                style="color: #cb3a31;"
                v-if="directionCount > 1" @click="removeDirection(count-1)"
              >
                <i class="fa-regular fa-trash-can px-1"></i
                ><span class="d-none d-md-inline" style="cursor: pointer;">Delete</span>
              </div>
            </div>
          </div>
          <!-- Add More Button Start -->
          <base-button
            class="new-ingredient-btn px-3 py-2"
            type="button"
            @clickButton="addDirection"
          >Add More</base-button>
          <!-- Add More Button End -->
        </div>
        <!-- Direction End -->
  
        <!-- Form Button Start -->
        <div class="border-top py-3 d-flex my-4 justify-content-end">
          <!-- Cancel Button Start -->
          <base-button
            class="cancel-btn px-3 py-2 ms-1"
          >Cancel</base-button>
          <!-- Cancel Button End -->
  
          <!-- Submit Button Start -->
          <base-button
            class="submit-recipe-btn px-3 py-2 ms-1"
          >Submit</base-button>
          <!-- Submit Button End -->
        </div>
        <!-- Form Button End -->
      </form>
    </li>
  </template>

<script setup>
import BaseTextArea from '../ui/BaseTextArea.vue'
import BaseSelect from '../ui/BaseSelect.vue'
import BaseInput from '../ui/BaseInput.vue'
import BaseButton from '../ui/BaseButton.vue'
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
    
const recipeData = reactive({
  imageLink: '',
  name: '',
  description: '',
  category: '',
  prepTime: '',
  cookTime: '',
  totalTime: '',
  ingredients: [],
  directions: [],
})

const ingredientCount = ref(1);
const directionCount = ref(1);

const addIngredient = () => {
  ingredientCount.value++;
};

const addDirection = () => {
  directionCount.value++;
};

const removeIngredient = (index) => {
  recipeData.ingredients.splice(index, 1);
  directionCount.value--;
};
const removeDirection = (index) => {
  recipeData.directions.splice(index, 1);
  directionCount.value--;
};

const totalTime = () => {
  recipeData.totalTime = parseInt(recipeData.prepTime) + parseInt(recipeData.cookTime);
};

const checkImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener("load", () => {
      recipeData.imageLink = reader.result;
    });
  }

  const store = useStore();
  const router = useRouter();
  const addNewRecipe = async () => {
    await store.dispatch('recipe/addNewRecipe', recipeData);
    router.push('/');
  };
</script>
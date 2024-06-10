<template>
    <div class="col-12 col-sm-8">
        <recipe-description v-if="recipeStatus"></recipe-description>
        <recipe-ingredients></recipe-ingredients>
        <recipe-directions></recipe-directions>
    </div>
</template>

<script setup>
    import RecipeIngredients from './RecipeIngredients.vue'
    import RecipeDirections from './RecipeDirections.vue'
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';
    import RecipeDescription from './RecipeDescription.vue'

    const store = useStore()
    const route = useRoute()

    const recipeStatus = ref(false)
    onMounted(async () =>{
        try {
            await store.dispatch(
            'recipe/getRecipeDetail', route.params.id
        );  
        recipeStatus.value = true;
        } catch (e) {
            console.log(e);
        }
    });
</script>

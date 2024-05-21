<template>
    <ul class="list-grup">
        <recipe-form-header></recipe-form-header>
        <recipe-form-body :isEdit="isEdit"></recipe-form-body>
    </ul>
</template>

<script setup>
    import RecipeFormBody from './RecipeFormBody.vue'
    import RecipeFormHeader from './RecipeFormHeader.vue'
    
    defineProps({
    isEdit: {type: Boolean, default: false}
  })
</script>
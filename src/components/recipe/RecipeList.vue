<template>
  <div class="recipe__list-recipe-row">
    <div class="row flex-row">
      <div
        class="col-12 col-lg-3 col-sm-4 position-relative"
        style="padding-top: 12px; padding-bottom: 12px"
        v-for="(item) in recipes" :key="item"
      >
      <router-link :to="/recipe/ + item.id" class="text-decoration-none">
        <div class="card text-decoration-none" style="height: 398px">
          <img
            v-bind:src=item.imageLink
            class="card-img-top"
            alt="Food"
            height="240"
            width="285"
            style="object-fit: cover"
          />
          <div class="card-body" style="color: #0a0a0a">
            <p class="mb-0">{{ item.category }}</p>
            <div class="h-50">
              <h4 class="fs-5 mb-0">{{ item.name }}</h4>
            </div>
            <p>Recipe By {{ item.username }}</p>
          </div>
        </div>
      </router-link>
    
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    recipes: Array
  })

</script>

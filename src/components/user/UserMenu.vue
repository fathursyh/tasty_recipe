<template>
  <div class="col-lg-3 mb-4">
    <ul class="list-group">
      <li class="list-group-item">
        <div class="d-flex align-items-center">
          <img
            src=""
            alt="Profile"
            width="36"
            height="36"
            class="rounded-circle"
            style="object-fit: cover"
          />
          <div class="ps-3">
            <p class="my-0 fs-5 fw-semibold">Jack Daniel</p>
            <p class="my-0 fs-6 text-secondary">jackdaniel@mail.com</p>
          </div>
        </div>
      </li>
      <li class="list-group-item user-menu" @click="menuClicked('personal-info')">
        Personal Info
      </li>
      <li class="list-group-item user-menu" @click="menuClicked('favorite-recipes')">
        Favorited Recipes
      </li>
      <li class="list-group-item user-menu" @click="menuClicked('user-recipe')">
        My Recipe
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-menu:hover {
  cursor: pointer;
}

.active-color {
  color: #4c4ddc;
}

.inactive-color {
  color: #404040;
}
</style>

<script setup>
  const emit = defineEmits(['changeComponent']);

  const menuClicked = (option) => {
    emit('changeComponent', option)
  }
</script>
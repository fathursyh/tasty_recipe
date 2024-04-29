<template>
   <div class="col-12 col-lg-3 col-sm-4 position-relative" style="padding-top: 12px; padding-bottom: 12px">
      <div class="card text-decoration-none" style="height: 398px">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2023_05/1963490/puff-pastry-beef-wellington-valentines-day-2x1-zz-230201.jpg"
          class="card-img-top" alt="Food" height="240" width="285" style="object-fit: cover" />
        <div class="card-body" style="color: #0a0a0a">
          <p class="mb-0">Dinner</p>
          <div class="h-50">
            <h4 class="fs-5 mb-0"></h4>
          </div>
          <p></p>
        </div>
      </div>
      <div class="position-absolute text-secondary bg-light px-2 py-1 rounded-circle top-0 end-0 m-4 like-icon">
        <i class="fas fa-heart"></i>
      </div>
    </div>
</template>

<script setup>
   defineProps({
    recipes: Array
  })
</script>
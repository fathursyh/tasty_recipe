<template>
  <div
    class="header__navbar row justify-content-center align-items-center"
    style="width: 450px"
  >
    <search-menu></search-menu>
    <component :is="components[menuComponent]"></component>
  </div>
</template>
<script setup>
  import { ref, computed, watch } from "vue";
  import { useStore } from "vuex";
  import SearchMenu from "./SearchMenu.vue";
  import SignupMenu from "./SignupMenu.vue";
  import ProfileMenu from './ProfileMenu.vue'

  const menuComponent = ref("signup-menu");
  const store = useStore();

  const components = {
    "signup-menu": SignupMenu,
    "profile-menu": ProfileMenu,
  };

  const getToken = computed(()=>{
    return store.state.auth.token;
  });

  if(!getToken.value) {
    menuComponent.value = 'signup-menu';
  } else {
    menuComponent.value = 'profile-menu';
  }

  watch(getToken, (newValue, oldValue)=>{
    if(!newValue.value) {
      menuComponent.value = 'signup-menu';
    } else {
      menuComponent.value = 'profile-menu';
    }
  });
</script>

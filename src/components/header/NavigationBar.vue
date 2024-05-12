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
  import LoginMenu from "./LoginMenu.vue";
  import ProfileMenu from "./ProfileMenu.vue";

  const menuComponent = ref("signup-menu");
  const store = useStore();

  const components = {
    "login-menu": LoginMenu,
    "profile-menu": ProfileMenu,
  };

  const getToken = computed(()=>{
    return store.state.auth.isLogin;
  });

  if(!getToken.value) {
    menuComponent.value = 'login-menu';
  } else {
    menuComponent.value = 'profile-menu';
  }

  watch(getToken, (newGetToken, oldGetToken)=>{
    if(!newGetToken) {
      menuComponent.value = 'login-menu';
    } else {
      menuComponent.value = 'profile-menu';
      console.log('login')
    }
  });

</script>

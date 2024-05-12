<template>
  <div
    class="header__signup col-8 col-sm-4 fw-semibold d-flex justify-content-evenly align-items-center text-decoration-none"
    style="text-align: right"
  >
    <i class="fa-solid fa-user" style="color: #4c4ddc"></i>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          {{ username }}
        </a>
        <ul class="dropdown-menu">
          <li class="dropdown-item" @click.prevent="pindah('userPage')">My Profile</li>
          <li class="dropdown-item">Favorited Recipes</li>
          <li class="dropdown-item">My Recipes</li>
          <li><hr class="dropdown-divider" /></li>
          <li class="dropdown-item" @click.prevent="logout">Logout</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';


  const store = useStore();
  const router = useRouter();

  const logout = () => {
    store.commit('auth/setUserLogout');
    router.push('/');
  };
  
  const pindah = (url) => {
    console.log('pindah');
    router.push({name: url});
  };

  const username = computed(()=>{
    return store.state.auth.username;
  })
</script>

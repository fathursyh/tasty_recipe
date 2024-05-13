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
          <router-link class="dropdown-item" to="/user/personal-info">My Profile</router-link>
          <router-link class="dropdown-item">Favorited Recipes</router-link>
          <router-link class="dropdown-item">My Recipes</router-link>
          <router-link><hr class="dropdown-divider" /></router-link>
          <router-link class="dropdown-item" @click.prevent="logout">Logout</router-link>
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
    router.push({name: url});
  };

  const username = computed(()=>{
    return store.state.auth.username;
  })

</script>

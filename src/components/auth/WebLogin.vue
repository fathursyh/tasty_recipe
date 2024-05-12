<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div
      style="background-color: #ffffff;"
      class="p-5 m-auto login-form col-lg-4 vh-100"
    >
      <div class="text-center">
        <img src="../../assets/images/Logo.png" alt="Logo" />
        <h2 class="mt-4">Log in to your account</h2>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <form @submit.prevent="login">
        <div class="my-4">
          <base-input type="text" id="email" label="Email" v-model="loginData.email"> </base-input>
        </div>
        <div class="my-4">
          <base-input type="password" id="password" label="Password" v-model="loginData.password">
          </base-input>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <base-button class="login w-50 my-3">Login</base-button>
        </div>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Don’t have an account?<span style="color: #4c4ddc">
            <routerLink to="/signup" class="text-decoration-none">
              Signup</routerLink
            ></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';
  import BaseButton from '../ui/BaseButton.vue'
  import BaseInput from "../ui/BaseInput.vue";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

  const loginData = reactive({
    email: '',
    password: '',
    isLogin: true
  })

  const store = useStore()
  const router = useRouter()

  const login = async () => {
    await store.dispatch('auth/getLoginData', loginData);
    router.push('/');
    // console.log(store.state.auth);
  };

</script>

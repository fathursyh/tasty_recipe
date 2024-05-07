<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
      <div class="text-center">
        <img src="../../assets/images/Logo.png" alt="Logo" />
        <h2 class="mt-4">Create your account</h2>
        <p>Enter your details to use all the app features.</p>
      </div>
      <form class="mt-3">
        <div class="row">
          <div class="col-md-6">
            <base-input
              type="text"
              id="firstName"
              placeholder="Ex : Michael"
              label="First Name">
            </base-input>
          </div>
          <div class="col-md-6">
            <base-input
              type="text"
              id="lastName"
              placeholder="Ex : Scott"
              label="Last Name">
            </base-input>
          </div>
        </div>
        <div class="my-4">
          <base-input
              type="text"
              id="username"
              placeholder="Your username"
              label="Username">
            </base-input>
        </div>
        <div class="my-4">
          <base-input
              type="text"
              id="email"
              placeholder="Your email address"
              label="Email Address">
            </base-input>
        </div>
        <div class="my-4">
          <base-input
              type="password"
              id="password"
              placeholder="Your password"
              label="Password">
            </base-input>
        </div>
        <div class="my-4">
          <base-input
              type="password"
              id="confrimPassword"
              placeholder="Re-type Password"
              label="Confirm Password">
            </base-input>
        </div>
        <div class="my-4">
          <base-input
              type="file"
              id="recipeImage"
              label="Profile photo"
              isImage>
              <div style="cursor: pointer;">
                <div class="border p-1 mt-2 rounded-circle">
                  <img src="../../assets/images/Logo.png" class="rounded-circle" width="140" height="150" style="object-fit: cover;" alt="">
                </div>
                <div class="text-center" style="transform: translateY(-16px);">
                    <i class="p-2 rounded-circle bg-white"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
                    </svg></i>
                </div>
              </div>
            </base-input>
        </div>
        <div class="col-12 d-flex justify-content-center">
          <base-button class="login w-50 my-3">Register</base-button>
        </div>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Already have account?<span style="color: #4c4ddc"
            ><routerLink to="/login" class="text-decoration-none"> Login</routerLink></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import BaseButton from '../ui/BaseButton.vue'
  import BaseInput from '../ui/BaseInput.vue';
</script>
<template>
  <div id="mainBody">
    <web-header></web-header>
    <router-view></router-view>
    <web-footer></web-footer>
  </div>
</template>

<script setup>
  import WebHeader from './components/header/WebHeader.vue'
  import WebFooter from './components/footer/WebFooter.vue'
</script>
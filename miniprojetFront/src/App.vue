<template>
    <RouterView />
  </template>
  
  <script setup>
  import { RouterView } from 'vue-router';
  import home from '@/components/home.vue';
  import login from '@/components/login.vue';
  import signup from '@/components/signup.vue';
  
  // No need to export default here
  const components = {
    login,
    signup,
    home
  };
  </script>
  
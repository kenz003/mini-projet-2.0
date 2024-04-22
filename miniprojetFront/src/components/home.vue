//home.vue
<template>
  <div class="hero min-h-screen bg-primary-content flex flex-col justify-center items-center">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">WELCOME !</h1>
        <button class="btn btn-primary mt-10 mr-10" @click="goToSignup">SignUp</button>
        <button class="btn btn-primary mt-10" @click="goToLogin">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  methods: {
    goToSignup() {
      this.$router.push('/signup');
    },
    goToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>


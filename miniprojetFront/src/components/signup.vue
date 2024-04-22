<template>
    <div class="flex justify-center items-center mt-20 ml-50">
      <div class="card w-96 bg-primary-content ma shadow-xl">
        <div class="login bg-primary-content flex justify-center items-center h-12 mt-5">
          <h1 class="text-5xl font-bold">SIGN UP!</h1>
        </div>
        <form class="card-body" @submit.prevent="signup()">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Full Name</span>
            </label>
            <input type="text" v-model="name" placeholder="Full name" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" v-model="email" placeholder="Email" class="input input-bordered" required />
            <div class="error " v-if="errors.email"><span class="text-red-600">{{ errors.email }}</span></div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" v-model="password" placeholder="Password" class="input input-bordered" required />
            <div class="error" v-if="errors.password">
              <span class="text-red-600">{{ errors.password }}</span>
            </div>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  //import axios from 'axios';
  import LoginValidations from '../services/LoginValidations.js';
  export default {
    name: 'signup',
    data() {
      return {
        name: '', 
        email: '', 
        password: '',
        errors: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      async signup() {
        let validations = new LoginValidations(this.email, this.password);
        this.errors = validations.checkValidation();
  
        if ('email' in this.errors || 'password' in this.errors) {
          return false;
        }
  
        // try {
        //   const response = await axios.post("http://127.0.0.1:8000/api/register", {// l'ajout de l'api de signup
        //     name: this.name,
        //     email: this.email,
        //     password: this.password
        //   });
        //   console.log(response.data);
        //   this.$router.push({ name: 'crud' });
        // } catch (error) {
        //   console.error(error);
        //   this.errors.password = "Failed to rigester";
        // }
      }
    }
  }
  </script>
  
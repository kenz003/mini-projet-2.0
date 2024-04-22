<template>
    <div class="flex justify-center items-center mt-20 ml-50">
      <div class="card w-96 bg-primary-content ma shadow-xl">
        <div class="login bg-primary-content flex justify-center items-center h-12 mt-5">
          <h1 class="text-5xl font-bold">LOG IN!</h1>
        </div>
        <form class="card-body" @submit.prevent="onLogin()">
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
            <button class="btn btn-primary" @click="login">login</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
import LoginValidations from '../services/LoginValidations.js';
  import axios from 'axios';
  
  export default {
    name: 'login',
    
    data() {
      return {
        email: '', 
        password: '',
        errors: { // Ajout de la propriété 'errors'
          email: '',
          password: ''
        }
      };
    },
    methods: {
      async onLogin(){ // Ajout de async devant la fonction
        //check the validation 
        //if (validation of)
        // do the signup
        //else show errors
        let validations = new LoginValidations(
          this.email,
          this.password,
        );
        this.errors = validations.checkValidation();
        if(this.errors.email || this.errors.password){ // Correction ici
          return false;
        };
        
        // try {
        //   const response = await axios.post("http://127.0.0.1:8000/api/login", {// ajout de l'api de login
        //     email: this.email,
        //     password: this.password
        //   });
  
        //   console.log(response.data);
          
        //   // Vérifier la réponse de l'API
        //   if (response.data.status === true) {
        //     alert("Login Successfully");
        //     // Rediriger vers la page d'accueil si la connexion est réussie
        //     this.$router.push({ name: 'crud' });
        //   } else {
        //     this.errors.password = "Failed to login";
        //   }
        // } catch (err) {
        //   console.error(err);
        //   this.errors.password = "Error, please try again";
        // }
      }
    }
  };
  </script>
  
<template>
  <NavbarVue/>
  
    
  
    <br> <br>
    <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="this.students.length > 0">
            <!-- row 1 -->
            <tr v-for="(student, index) in this.students" :key="index">
              <th>{{ student.id }}</th>
              <td>{{ student.name }}</td>
              <td>{{ student.grade }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td><button class="btn">Button</button>  |
                <button class="btn btn-error">Error</button></td>
            </tr>
            <!-- row 3 -->
          </tbody>
          
          <tbody v-else>
            <tr>
                <td colspan="7">Loading...</td>
            </tr>
        </tbody>
        </table>
      </div>
      <div class="navbar-end">
        <router-link class="btn"  to="/add">Add student</router-link>
      </div>
    
    
  </template>
  
  <script>
import NavbarVue from '../Navbar.vue'
import axios from 'axios';

  
  
  export default {
    name: 'App',
    components: { 
        NavbarVue
    },
    data(){
        return{
            students:[]
        }
    },
    mounted(){
        this.getStudent();
    },
    methods: {
        getStudent(){
            axios.get('').then(res=> {
                this.student = res.eleves.eleves;
            });
        }
    }
  }
  </script>
  
  <style>
  /* Add any necessary global styles here */
  </style>
  
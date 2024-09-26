<template>
  <nav class="navbar navbar-expand-lg flex flex-row-reverse space-x-4 space-x-reverse text-center text-green-700 ps-8">
    <router-link to="/"> Home </router-link> |
    <router-link to="/login"> Login </router-link> |
    <router-link to="/signup"> Sign Up </router-link> |
  </nav>
  
  <div class="container">
    <div class="row"> 
      <div class="col-md-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import TheNavigation from './components/TheNavigation.vue';
export default defineComponent({
  name: 'App',
  components: {
    TheNavigation
  }
})
</script>
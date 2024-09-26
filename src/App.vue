<template>
  <nav>
    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">Sing Up</router-link>
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
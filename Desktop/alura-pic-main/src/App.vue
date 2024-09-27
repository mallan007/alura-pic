<template>
  <nav class="navbar navbar-expand-lg text-center text-green-700 ps-8">
    |<router-link to="/"> Home </router-link> |
    <router-link to="/login"> Login </router-link> |
    <router-link to="/signup"> Sign Up </router-link> |
    <router-link to="/edit"> Edit </router-link> |
  </nav>
  <div>
        <router-view/>
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
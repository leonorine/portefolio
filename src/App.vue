<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from "@/components/sidebar.vue";
import {ref} from "vue";
import Bandeau from "@/components/bandeau.vue";
import HomeView from "@/views/HomeView.vue";
const sidebarOpen = ref(false);
function toggleSidebar (){
  sidebarOpen.value = !sidebarOpen.value
}

</script>

<template>
  <bandeau @on-menu-click="toggleSidebar" id = "bandeau"/>
  <sidebar :open="sidebarOpen" @on-croix-click="toggleSidebar" id = "sidebar"/>



  <!--  <header>
     <div class="wrapper">
--      <nav>
         <RouterLink to="/">Home</RouterLink>
         <RouterLink to="/about">About</RouterLink>
       </nav>
    </div>
  </header>-->

  <RouterView />
</template>

<style scoped>
#bandeau{
  z-index:2;
}
#sidebar{
  z-index:1;
}




</style>

<template>
  <v-app>
    <v-main class="mt-12">
      <!-- <MenuSuperior @toggle-add-card-mode="handleToggleAddCardMode"/>   -->
      <MenuLateral/> 
      <AppBar/>    
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from './AppBar.vue'
// import MenuSuperior from './MenuSuperior.vue' 
import MenuLateral from './MenuLateral.vue' 
</script>


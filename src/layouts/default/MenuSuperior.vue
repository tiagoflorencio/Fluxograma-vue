<!-- AppBar.vue -->
<template>
  <v-app-bar app color="primary" fixed>
    <v-toolbar-title>Meu Toolbar</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="toggleAddCardMode">{{ addCardMode ? 'Desativar' : 'Ativar' }} Adicionar Card</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      addCardMode: false
    };
  },
  methods: {
    toggleAddCardMode() {
      this.addCardMode = !this.addCardMode;
      this.$emit('toggle-add-card-mode', this.addCardMode); // Emitindo o evento personalizado
    }
  },  
   
};
</script>

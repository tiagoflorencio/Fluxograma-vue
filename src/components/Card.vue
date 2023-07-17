<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <!-- Conteúdo adicional do card -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: "Card 1",
            description: "Descrição do card, Descrição do card , Descrição do card, Descrição do card, Descrição do card, Descrição do card"
      // Outras propriedades relevantes para o card
    }
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  
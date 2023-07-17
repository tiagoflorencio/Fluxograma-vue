<template> 

<v-container
      class=" mb-6"
    >
      <v-row
        align="start"
        no-gutters        
      >
        <v-col sm="12"          
        >
        <v-card class="mx-2 pa-2 text-center bg-1">
                  <h3>gráficos</h3>
            </v-card> 
        <v-card class="ma-5">
          <GraficoLinha />
        </v-card>
      </v-col>      
      <v-col sm-12>
        <v-card class="ma-5">
          <GraficoBarra />
  </v-card>
        </v-col>

      </v-row>
    </v-container>

  </template>
  

  <script setup>
    import GraficoBarra from '@/components/GraficoBarra.vue'
  import GraficoLinha from '@/components/GraficoLinha.vue'
  </script>
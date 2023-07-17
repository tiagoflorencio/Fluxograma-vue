<template> 

      <v-row
        align="start"
        no-gutters
        style="min-height: 400px;"
      >      
      <v-col sm="12" > 
            <v-card class="mx-2 pa-2 text-center bg-1">              
                        <div>
                              <h3>TABELA ENTRADA</h3>
                        </div>           
                  
            </v-card>    
  <TabelaTempoVida />  
        </v-col>

        <v-col sm="8"          
        >
        <v-card class="ma-5">
  <!-- <GraficoBarra /> -->
  </v-card>
          </v-col>  

          <v-col sm="12" > 
            <v-card class="mx-2 pa-2 text-center bg-1">
                  <h3>TABELA SAIDA</h3>
            </v-card>      
  <TabelaSaida />  
        </v-col>

        <v-col sm="8"          
        >      
          </v-col>  
          
          
      </v-row>
      
   


    
  </template>
  
  <script setup>
  import TabelaTempoVida from '@/components/TabelaTempoVida.vue'
  import TabelaSaida from '@/components/TabelaSaida.vue'  
//import GraficoBarra from '@/components/GraficoBarra.vue';
  </script>
  <style>
.bg-1{
      background-color: rgb(12, 12, 94);
      color: #fff;
}
</style>
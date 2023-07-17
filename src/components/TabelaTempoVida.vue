<template>
  <v-card class="m-1">
  <v-table
    fixed-header
    height="400px"
    
      >
    <thead >
      <tr >
        <th class="text-left bg-2">
      Tempo de vida
        </th>
        <th class="text-left bg-2">
          Custo
        </th>
        <th class="text-left bg-2">
          Valor %
        </th>
        <th class="text-left bg-2">
         Anos bons
        </th>
        <th class="text-left bg-2">
      Tempo de vida
        </th>
        <th class="text-left bg-2">
          Custo
        </th>
        <th class="text-left bg-2">
          Valor %
        </th>
        <th class="text-left bg-2">
         Anos bons
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td >{{ item.tempo}}</td>
        <td >{{ item.custo }}</td>
        <td >{{ item.valor }}</td>
        <td >{{ item.anos }}</td>
        <td >{{ item.tempo}}</td>
        <td >{{ item.custo }}</td>
        <td >{{ item.valor }}</td>
        <td >{{ item.anos }}</td>
      </tr>
    </tbody>
  </v-table>
</v-card>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            tempo: 'Longo',
            custo: 159,
            valor: 6,
            anos: 10
          },
           {
            tempo: 'curto',
            custo: 159000,
            valor: 89,
            anos: 3
          },
           {
            tempo: 'médio',
            custo: 100000,
            valor: 67,
            anos: 23
          },
           {
            tempo: 'médio',
            custo: 30000,
            valor: 25,
            anos: 12
          },
           {
            tempo: 'curto',
            custo: 20566,
            valor: 38,
            anos: 10
          },
           {
            tempo: 'Longo',
            custo: 15962,
            valor: 15,
            anos: 5
          },
          {
            tempo: 'Longo',
            custo: 15962,
            valor: 15,
            anos: 5
          },

          {
            tempo: 'Longo',
            custo: 15962,
            valor: 15,
            anos: 5
          },
                   
          
        ],
      }
    },
  }
</script>



<style scoped>
.pt-1{
  padding-top: 15px;
}
.m-1{
 margin:  10px;
}

.bg-2{
  background-color:rgb(67, 134, 12) !important;
  color: #fff !important;
}
</style>
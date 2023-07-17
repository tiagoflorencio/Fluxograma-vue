<template>
  <v-card>
      <Bar :data="data" :options="options" />
  </v-card>
   </template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: ['Tempo de vida', 'Custo', 'Valor', 'Anos bons', 'Anos ruins'],
        datasets: [{ data: [40, 20, 12, 15, 35] }]
      },
      options: {
        responsive: true
      }
    }
  }
}


</script>
<template>
     <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="\src\assets\img\tiago.jpeg" 
          title="Tiago Jesus"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item to="/home" prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item to="/tabelas" prepend-icon="mdi-account" title="Tabelas" value="tabelas"></v-list-item>
          <v-list-item to="/graficos" prepend-icon="mdi-account-group-outline" title="Graficos" value="graficos"></v-list-item>
          <v-list-item to="/formularios" prepend-icon="mdi-account-group-outline" title="Formularios" value="formulario"></v-list-item>
          <v-list-item to="/fluxograma2" prepend-icon="mdi-account-group-outline" title="Fluxograma" value="fluxograma"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>


  export default {
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
    components: {
     
  },
  }
</script>
/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VDataTable } from "vuetify/labs/VDataTable";
import Popper from "vue3-popper";
// import Draggable from "vuedraggable";
import { VueDraggableNext } from "vue-draggable-next";
// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi", // This is already the default value - only for display purposes
  },
  components: {
    VDataTable,
    Popper,
    draggable: VueDraggableNext,
  },
});

import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#cfd8dc",
        text: "#404040",
        secondary: "#00a5bd",
        accent: "#5cd7f0",
        error: colors.red.accent3,
        info: "#2196F3",
        success: "#0000ff",
        warning: "#ff7043"
      },
      dark: {
        primary: colors.blue.lighten3,
        secondary: colors.green,
        accent: colors.cyan,
        text: "#ffffff"
      }
    }
  }
});

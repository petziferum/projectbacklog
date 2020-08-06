<template>
  <v-app>
    <v-app-bar
      app
      prominent
      src="https://cdn.pixabay.com/photo/2015/09/02/13/19/ocean-918999_1280.jpg"
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top left, rgba(190,84,122,.2), rgba(128,208,219,.6)"
        ></v-img>
      </template>
      <template v-slot:extension>
        <v-tabs v-model="tab" centered>
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    tab: null,
    items: ["Home", "Projekte", "Nachwuchskräfte"]
  })
};
</script>

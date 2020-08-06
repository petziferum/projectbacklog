<template>
  <v-container>
    <v-row>
      <v-col>
        <p><span class="text-h2">Verfügbare Projekte</span></p>
      </v-col>
    </v-row>

    <project-card />
  </v-container>
</template>

<script>
// @ is an alias to /src
import projectCard from "@/components/projectCard";
export default {
  name: "Home",
  components: {
    projectCard
  }
};
</script>

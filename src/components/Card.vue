<template>
  <v-card class="mx-auto" min-width="250" min-heigth="300">
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>{{ article.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> Description </v-card-subtitle>

    <v-card-text>
      <div>{{ `${article.body.split("").slice(0, 50).join("")}...` }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange"> Read </v-btn>

      <v-btn color="orange"> Share </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "card",
  props: {
    article: {
      type: Object,
    },
  },
};
</script>
<style scoped></style>

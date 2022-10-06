<template>
  <v-container>
    <v-row class="d-flex justify-center mt-10" no-gutters>
      <v-col cols="2">
        <v-select
          :items="items"
          label="Сортировка"
          variant="solo"
          density="compact"
        ></v-select>
      </v-col>
      <v-col class="ml-5" cols="5">
        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="Поиск"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onClick"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-10">
      <v-col v-for="article in articles" class="d-flex ml-3" cols="2">
        <Card :article="article" />
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-10 mb-10" no-gutters>
      <div class="text-center">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  data: () => ({
    loaded: true,
    loading: false,
    items: ["Новые статьи", "Популярные статьи"],
    articles: [],
  }),
  mounted() {
    this.getArticles();
  },
  methods: {
    onClick() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    async getArticles() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: 10,
          },
        }
      );
      this.articles = data;
    },
  },
  components: { Card },
};
</script>
<style scoped></style>

<template>
  <v-app-bar color="white" elevation="0" hide-on-scroll>
    <v-container class="d-flex justify-between">
      <v-img
        @click="this.$router.push('/')"
        max-height="50"
        max-width="50"
        src="../assets/logo.png"
      ></v-img>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <div>
          <v-btn
            variant="outlined"
            color="primary"
            @click="$router.push('/login')"
          >
            Войти
          </v-btn>
          <v-btn
            class="ml-4"
            variant="outlined"
            color="orange"
            @click="$router.push('/registration')"
          >
            Зарегистрироваться
          </v-btn>
        </div>
        <!-- <div>
          <ui class="d-flex align-center">
            <li v-for="{ name, url } in items">
              <v-btn @click="this.$router.push(url)" variant="text">{{
                name
              }}</v-btn>
            </li>
          </ui>
          <v-btn icon="mdi-account-circle" color="info"></v-btn>
        </div> -->
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "navbar",

  data() {
    return {
      items: [
        { name: "Все статьи", url: "/articles" },
        { name: "Популярные статьи", url: "/populars" },
        { name: "Мои статьи", url: "/myarticles" },
      ],
    };
  },
  computed: {
    ...mapState("user", ["isAuth"]),
  },
  created() {
    this.toggler();
  },
  mounted() {
    this.toggler();
  },
  methods: {
    toggler() {
      console.log(this.isAuth);
    },
  },
};
</script>
<style scoped>
li {
  margin-left: 10px;
  list-style-type: none;
}

li:first-of-type {
  margin-left: 0;
}
</style>

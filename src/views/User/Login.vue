<template>
  <v-container class="d-flex justify-center">
    <div class="box">
      <v-card class="mx-auto" min-width="340px" max-width="344" title="Вход">
        <v-container>
          <v-text-field
            v-model="email"
            color="primary"
            label="Email"
            placeholder="Введите логин или email"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="password"
            color="primary"
            label="Password"
            placeholder="Введите пароль"
            variant="underlined"
          ></v-text-field>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="login" color="success"> Войти </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:4444/auth/login", data);
    },
  },
};
</script>
<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkorange;
  border-radius: 15px;
  height: 800px;
  width: 1000px;
}
</style>

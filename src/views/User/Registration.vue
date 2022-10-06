<template>
  <v-container class="d-flex justify-center">
    <div class="box">
      <v-card
        class="mx-auto"
        min-width="340px"
        max-width="344"
        title="Регистрация"
      >
        <v-container>
          <v-text-field
            v-model="firstName"
            color="primary"
            label="Имя"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="lastName"
            color="primary"
            label="Фамилия"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="email"
            color="primary"
            label="Email"
            variant="underlined"
          ></v-text-field>

          <v-text-field
            v-model="password"
            color="primary"
            label="Пароль"
            placeholder="Enter your password"
            variant="underlined"
          ></v-text-field>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn @click="registration" color="success">
            Зарегистрироваться
          </v-btn>
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },

  methods: {
    registration() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:4444/auth/register", data);
      this.$router.push("/login");
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

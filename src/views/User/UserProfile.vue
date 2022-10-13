<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="d-flex justify-center align-center" cols="12">
        <div class="box">
          <v-card class="mx-auto" height="600" width="800px">
            <v-card-text>
              <div class="text-h5 text--primary mb-4">Личная информация</div>
              <div>
                <p class="text--primary">Имя: {{ userInfo.firstName }}</p>
                <p class="text--primary mt-2">
                  Фамилия: {{ userInfo.lastName }}
                </p>
                <p class="text--primary mt-2">Email: {{ userInfo.email }}</p>
                <p class="text--primary mt-2">Число опубликованных постов</p>
              </div>
            </v-card-text>
            <!-- <v-card-actions>
              <v-btn
                variant="text"
                color="teal-accent-4"
                @click="reveal = true"
              >
                Добавить пост
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  props: {
    userId: {
      type: String,
    },
  },
  data() {
    return {
      userInfo: {},
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const res = await axios.get(
        `http://localhost:4444/auth/profile/${this.userId}`
      );
      this.userInfo = res.data;
      console.log(this.userInfo.firstName);
    },
  },
};
</script>
<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6fa;
  border-radius: 10px;
  width: 80%;
  min-height: 800px;
  overflow: scrollж;
}
.form {
  border-radius: 10px;
  background-color: white;
  width: 800px;
  height: 500px;
}
</style>

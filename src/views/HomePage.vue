<template>
  <div class="home">
    <v-container>
      <v-img
        class="d-flex align-center"
        src="../assets/homeBackground.jpg"
        height="800"
        cover
      >
        <div class="d-flex flex-column text-center">
          <span class="title text-h1">Добро пожаловать на блог</span>
          <div class="mt-5">
            <v-btn flat color="orange" class="red--text">
              Зарегистрироваться
            </v-btn>
          </div>
        </div>
      </v-img>
    </v-container>
    <v-container>
      <div class="text-center">
        <span class="text-h2">С чего же начать?</span>
      </div>
      <v-timeline class="mt-16" align="start">
        <v-timeline-item
          v-for="({ title, description, color }, i) in items"
          :key="i"
          :dot-color="color"
          size="small"
        >
          <div>
            <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${color}`">
              {{ title }}
            </h2>
            <div>
              {{ description }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      items: [
        {
          title: "Зарегистрируйся или войди",
          description: "Что бы делиться своими мыслями или бесценным опытом",
          color: "orange",
        },
        {
          title: "Заполни свой профиль",
          description: "Что бы твои друзья могли тебя быстрее найти",
          color: "green",
        },
        {
          title: "Найди друзей",
          description:
            "С которыми ты мог бы делиться чем то интересным, ведь какой блог без друзей?",
          color: "blue",
        },
        {
          title: "Опубликуй свой первый пост",
          description: "Попробуй опубликовать что то интересное и уникальное",
          color: "pink",
        },
        {
          title: "Жди свой первый лайк или коментарий",
          description: "Улыбнись)",
          color: "orange",
        },
      ],
    };
  },
  components: { Footer },
};
</script>
<style scoped>
.title {
  color: white;
}
</style>

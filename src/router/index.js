import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import PopularPage from "@/views/PopularPage";
import AllArticles from "@/views/AllArticles";
import MyArticles from "@/views/MyArticles";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/popular",
    component: PopularPage,
  },
  {
    path: "/allarticle",
    component: AllArticles,
  },
  {
    path: "/myarticles",
    component: MyArticles,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;

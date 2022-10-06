import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import PopularPage from "@/views/PopularPage";
import Articles from "@/views/Articles";
import MyArticles from "@/views/MyArticles";
import Login from "@/views/User/Login";
import Registration from "@/views/User/Registration";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/populars",
    component: PopularPage,
  },
  {
    path: "/articles",
    component: Articles,
  },
  {
    path: "/myarticles",
    component: MyArticles,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/registration",
    component: Registration,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;

import MainPage from "../pages/MainPage/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import AddArticle from "../pages/AddArticle/AddArticle.vue";
import Articles from "../pages/Articles/Articles.vue";
import ArticleInner from "@/pages/ArticleInner/ArticleInner.vue";

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/add-article',
        component: AddArticle,
    },
    {
        path: '/articles',
        component: Articles,
    },
    {
        path: '/article/:id',
        component: ArticleInner,
        props: true,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
import {
    createWebHistory,
    createMemoryHistory,
    createRouter
} from "vue-router";

import Signin from "../pages/Signin.vue";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        redirect: "/"
    },
    {
        path: "/",
        name: "signin",
        component: Signin
    }
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes
});

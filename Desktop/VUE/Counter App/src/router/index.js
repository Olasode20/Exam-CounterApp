import { createRouter, createWebHashHistory } from "vue-router";

import CounterHome from "@/pages/CounterHome.vue"
import CounterPage from "@/pages/CounterPage.vue"
// import NotFound from "@/components/NotFound.vue"

const routes = [
    { path: "/", name: "CounterHome", component: CounterHome },
    { path: "/CounterPage", name: "CounterPage", component: CounterPage },
    // { path: "*", name: "Notfound", component: Notfound },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
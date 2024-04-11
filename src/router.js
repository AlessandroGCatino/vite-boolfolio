import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue"
import ContactUs from "./pages/ContactUs.vue"
import ProjectsList from "./pages/ProjectsList.vue"
import SingleProject from "./pages/SingleProject.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsList
        },
        {
            path: "/projects/:id",
            name: "single-project",
            component: SingleProject
        },
        {
            path: "/contact-us",
            name: "contact-us",
            component: ContactUs
        }
    ]
})

export {router}
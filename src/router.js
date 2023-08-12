import {
    createWebHistory,
    createRouter
} from "vue-router";

const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const Contact = () => import('./views/Contact.vue')




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home, alias: '/jdm-export'
        },
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
        {
            path: "/contact",
            component: Contact,
        },
        // {
        //     path: '/:notFound(.*)',
        //     component: NotFound
        // }
    ]

})

export default router;
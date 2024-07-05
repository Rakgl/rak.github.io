import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import Blog from '../views/Blog.vue';
import AboutUs from '../views/AboutUs.vue';
import ContactUs from '../views/ContactUs.vue';
import ListMenu from '../views/ListMenu.vue';
import AddToCard from '../views/AddToCard.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/about/us',
            name: 'about us',
            component: AboutUs
        },
        {
            path: '/contact/us',
            name: 'contact us',
            component: ContactUs
        },
        {
            path: '/list/menu',
            name: 'list menu',
            component: ListMenu
        },
        {
            path: '/add/to/card',
            name: 'add to card',
            component: AddToCard
        },
    ]
    })
export default router

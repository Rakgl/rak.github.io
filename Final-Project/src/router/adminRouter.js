import { createRouter, createWebHistory } from 'vue-router'
import admin from '../views/login.vue';
import Board from '../components/admin/Board.vue';
import uploadUser from '../components/admin/uploadUser.vue';
import Listuser from '@/components/admin/listuser.vue';
import product from '../components/admin/product.vue';
import Adduser from '../components/admin/Adduser.vue';
import updateUser from '../components/admin/updateUser.vue';
import deleteUser from '../components/admin/deleteUser.vue';
import Addproduct from '../components/admin/Addproduct.vue';
import updateproduct from '../components/admin/updateproduct.vue';
import deleteproduct from '../components/admin/deleteproduct.vue';

const routes = 
    [
        {
            path: '/admin/login',
            name: 'admin-login',
            component: admin,
        },
        {
            path: '/admin/listuser',
            name: 'admin-listuser',
            component: Listuser,
            
        },
        {
            path: '/admin/Adduser',
            name: 'admin-Adduser',
            component: Adduser,
            
        },
        {
            path: '/admin/upload',
            name: 'admin-uploard',
            component: uploadUser,

        },
        {
            path: '/admin/update/user',
            name: 'admin-update-user',
            component: updateUser,

        },
        {
            path: '/admin/delete/user',
            name: 'admin-delete-user',
            component: deleteUser,

        },
        {
            path: '/admin/product',
            name: 'admin-product',
            component: product,
            
        },
        {
            path: '/admin/create/product',
            name: 'admin-create-product',
            component: Addproduct,

        },
        {
            path: '/admin/update/product',
            name: 'admin-update-product',
            component: updateproduct,

        },
        {
            path: '/admin/delete/product',
            name: 'admin-delete-product',
            component: deleteproduct,

        },
        {
            path: '/admin/dashboard',
            name: 'admin-dashboard',
            component: Board,
            beforeEnter: (to, from, next) => {
                var isLogin = localStorage.getItem('isLogin')
                if(isLogin != 'OK'){
                    next('/admin/login')
                }
                else{
                    next()
                }
            }
        },
    ]



const adminRouter = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
    })
export default adminRouter

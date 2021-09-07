/*
 * @Author: your name
 * @Date: 2021-07-01 19:48:38
 * @LastEditTime: 2021-09-07 20:32:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import("@/views/home/Home.vue");
const Cart = ()=>import("@/views/cart/Cart.vue");
const Category = ()=>import("@/views/category/Category.vue");
const Profile = ()=>import("@/views/profile/Profile.vue");
const Detail = () => import('../views/detail/Detail')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component:Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/category',
    name: 'Category',
    component:Category
  },
  {
    path: '/profile',
    name: 'Profile',
    component:Profile
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

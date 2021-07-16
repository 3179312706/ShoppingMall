/*
 * @Author: your name
 * @Date: 2021-07-01 19:48:38
 * @LastEditTime: 2021-07-14 15:28:53
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

const routes = [
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
    path:'',
  //重定向
    redirect:'/home'
}
]

const router = new VueRouter({
  routes
})

export default router

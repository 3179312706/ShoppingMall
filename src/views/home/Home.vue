<!--
 * @Author: your name
 * @Date: 2021-07-04 13:05:03
 * @LastEditTime: 2021-07-14 16:13:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\views\home\Home.vue
-->
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
import {getHomeMultidata} from 'network/home';
import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
import RecommendView from 'views/home/childComps/RecommendView.vue'

export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(res.data.recommend.list);
    })
  },
}
</script>

<style scoped>
  .home-nav{
    background-color: #ff5777;
    color: #fff;
    font-size: 20px;
  }
</style>
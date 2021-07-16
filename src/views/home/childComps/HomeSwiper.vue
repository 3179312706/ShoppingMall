<!--
 * @Author: your name
 * @Date: 2021-07-11 17:06:07
 * @LastEditTime: 2021-07-14 17:34:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\views\home\HomeSwiper\HomeSwiper.vue
-->
<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index" class="swiper-item">
      <a :href="item.link">
          <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    name: 'HomeSwiper',
    props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
    },  
    components:{
    SwiperItem,
    Swiper
    },
    data() {
      return {
        }
      }
    }
</script>

<style scoped>
  .swiper-item img{
    width: 100%;
  }
</style>
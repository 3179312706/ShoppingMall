<!--
 * @Author: your name
 * @Date: 2021-07-11 17:06:07
 * @LastEditTime: 2021-07-22 16:35:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\views\home\HomeSwiper\HomeSwiper.vue
-->
<template>
  <swiper>
    <swiper-item
      v-for="(item, index) in banners"
      :key="index"
      class="swiper-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    SwiperItem,
    Swiper,
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
</style>
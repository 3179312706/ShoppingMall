<!--
 * @Author: your name
 * @Date: 2021-07-16 14:35:52
 * @LastEditTime: 2021-09-06 17:17:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\views\home\childComps\FeatrueView.vue
-->
<template>
  <div class="feature">
    <!-- <a href="https://act.mogujie.com/zzlx67">
      <img src="../../../assets/img/home/recommend_bg.jpg" alt="">
    </a> -->
    <div class="feature-item" v-for="(item, index) in features" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'FeatureView',
  props: {
		  features: {
		    type: Array,
        default: []
      }
    }
}
</script>

<style scoped>
  .feature{
    /* width: 100%; */
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }
  .feature-item {
    flex: 1;
    text-align: center;
  }

  .feature img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
<!--
 * @Author: your name
 * @Date: 2021-07-04 13:04:44
 * @LastEditTime: 2021-07-20 21:36:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\views\category\Category.vue
-->
<template>
<div class="wrapper" ref="wrapper">
  <ul class="content">
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
    <li>111111</li>
  </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    // 组件创建完后调用
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType:3,
        pullUpLoad:true
      });

      this.scroll.on('scroll',(position) => {
      });

      this.scroll.on('pullingup',() => {
        
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;
    overflow: hidden;
  }
</style>
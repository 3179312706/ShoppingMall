<!--
 * @Author: your name
 * @Date: 2021-07-21 13:22:04
 * @LastEditTime: 2021-07-22 17:01:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\components\content\backTop\BackTop.vue
-->
<template>
  <div class="back-top">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop'
}
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 8px;
    bottom: 55px;
  }

  .back-top img{
    width: 43px;
    height: 43px;
  }
</style>
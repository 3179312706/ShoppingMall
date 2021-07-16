<!--
 * @Author: your name
 * @Date: 2021-07-06 19:01:19
 * @LastEditTime: 2021-07-07 15:11:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\components\common\navbar\NavBar.vue
-->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
  data(){
    return{
    }
	 },
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
  }

  .left, .right{
    width: 60px;
  }

  .center{
    flex: 1;
  }
</style>
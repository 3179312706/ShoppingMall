<!--
 * @Author: your name
 * @Date: 2021-07-03 11:41:43
 * @LastEditTime: 2021-07-07 15:18:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\components\content\tabbar\TabBar.vue
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background: #f6f6f6;
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
    line-height: 1.2;
    color: #000;
  }
</style>
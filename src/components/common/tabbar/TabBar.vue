<!--
 * @Author: your name
 * @Date: 2021-07-03 11:41:43
 * @LastEditTime: 2021-09-07 22:17:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\components\common\tabbar\TabBar.vue
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "TabBar"
	}
</script>

<style scoped>
  #tab-bar {
    background-color: #f6f6f6;
    height: 49px;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150,150,150,.08);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    
    display: flex;
    text-align: center;
  }
</style>



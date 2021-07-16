<!--
 * @Author: your name
 * @Date: 2021-07-03 11:45:20
 * @LastEditTime: 2021-07-06 16:34:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\components\content\tabbar\TabBarItem.vue
-->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String
  },
  data(){
    return{
    }
	 },
   methods: {
     itemClick(){
       this.$router.replace(this.path).catch(err => {
      console.log('all good')})
     }
   },
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
</style>
<!--
 * @Author: your name
 * @Date: 2021-07-17 21:30:50
 * @LastEditTime: 2021-09-07 22:00:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\components\content\goods\GoodsList.vue
-->
<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
import GridView from '../../common/gridView/GridView'

export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    GridView,
    GoodsListItem
  }
}
</script>

<style scoped>
  
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
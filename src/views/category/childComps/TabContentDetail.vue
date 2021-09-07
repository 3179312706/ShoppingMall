<!--
 * @Author: your name
 * @Date: 2021-09-06 14:57:27
 * @LastEditTime: 2021-09-07 21:35:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\views\category\childComps\TabContentDetail.vue
-->
<template>
  <grid-view class="grid">
    <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :goods="item"
    ></goods-list-item>
  </grid-view>
</template>

<script>
  import GridView from '../../../components/common/gridView/GridView.vue'
  import GoodsListItem from '../../../components/content/goods/GoodsListItem.vue'

  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodsListItem
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
</style>

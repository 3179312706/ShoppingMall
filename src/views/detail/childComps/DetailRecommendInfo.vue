<!--
 * @Author: your name
 * @Date: 2021-09-06 15:11:51
 * @LastEditTime: 2021-09-06 15:13:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\views\detail\childComps\DetailRecommendInfo.vue
-->
<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <grid-view>
      <goods-list-item v-for="(item, index) in recommendList" :key="index" :goods="item"></goods-list-item>
    </grid-view>
  </div>
</template>

<script>
  import GridView from '../../../components/common/gridView/GridView'
  import GoodsListItem from '../../../components/content/goods/GoodsListItem.vue'

	export default {
		name: "DetailRecommendInfo",
    components: {
		  GridView,
      GoodsListItem
    },
    props: {
		  recommendList: {
		    type: Array
      }
    }
	}
</script>

<style scoped>
  .recommend-info {
    padding: 5px;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>

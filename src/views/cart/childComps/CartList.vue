<!--
 * @Author: your name
 * @Date: 2021-09-06 14:37:01
 * @LastEditTime: 2021-09-06 14:40:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\views\cart\childComps\CartList.vue
-->
<template>
  <scroll>
    <div>
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
  import Scroll from '../../../components/common/scroll/Scroll.vue'
  import CartListItem from './CartListItem'

	export default {
		name: "CartList",
    components: {
		  Scroll, CartListItem
    },
    props: {
		  cartList: {
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

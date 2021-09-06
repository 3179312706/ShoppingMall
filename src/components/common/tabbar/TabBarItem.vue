<!--
 * @Author: your name
 * @Date: 2021-07-03 11:45:20
 * @LastEditTime: 2021-09-06 17:52:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\components\content\tabbar\TabBarItem.vue
-->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon" v-show="!isActive"></slot>
    <slot name="item-text" :style="activeStyle"></slot>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    link: {
				type: String,
        required: true
      }
  },
  computed:{
    isActive() {
				return this.$route.path.indexOf(this.link) !== -1
      },
    activeStyle() {
				return this.isActive ? {'color': 'red'} : {}
      }
  },
   methods: {
     itemClick() {
				this.$router.replace(this.link)
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
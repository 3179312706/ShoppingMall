<!--
 * @Author: your name
 * @Date: 2021-07-16 17:50:57
 * @LastEditTime: 2021-07-20 13:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\components\common\tabControl\TabControl.vue
-->
<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index" @click="btnClick(index)" :class="{ active: index == isActive}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  data() {
    return {
      isActive:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    btnClick:function(index){
      this.isActive = index;
      this.$emit('tabClick', index);
    }
  }
}
</script>

<style scoped>
@import url('../../../assets/css/base.css');

  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item{
    flex: 1;
  }

  .active{
    color: var(--color-high-text);
  }

  .tab-control-item span{
    padding: 5px;
  }

  .active span{
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
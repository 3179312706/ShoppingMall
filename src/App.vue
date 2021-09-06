<!--
 * @Author: your name
 * @Date: 2021-07-01 19:48:37
 * @LastEditTime: 2021-09-06 17:40:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item
        @click.native="btnClick(index)"
        :class="{ active: index == isActive }"
        v-for="(item, index) in tabbarlist"
        :link='item.path'
        :key="index"
      >
        <span :class="name" slot="item-icon" v-html="item.icon"></span>
        <div slot="item-text">{{ item.text }}</div>
      </tab-bar-item>
    </tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import TabBar from "../src/components/common/tabbar/TabBar.vue";
import TabBarItem from "../src/components/common/tabbar/TabBarItem.vue";
import Icon from '../src/components/content/Icon/Icon.vue';
import SvgIcon from '../src/components/content/Icon/svg.vue';

export default {
  name: "App",
  data() {
    return {
      tabbarlist: [
        { text: "首页", icon: "&#xe626;" ,path:"/home"},
        { text: "分类", icon: "&#xe705;" ,path:"/category"},
        { text: "购物车", icon: "&#xe606;" ,path:"/cart"},
        { text: "我的", icon: "&#xe607;",path:"/profile" },
      ],
      name: "iconfont",
      isActive: 0,
    };
  },
  components: {
    TabBar,
    TabBarItem,
    Icon,
    SvgIcon
  },
  methods: {
    btnClick: function (index) {
      this.isActive = index;
    },
  },
};
</script>

<style>
@import "./assets/css/base.css";

@font-face {
  font-family: "iconfont";
  src: url("../src/assets/font/tabbar/iconfont.woff2?t=1625219877383")
      format("woff2"),
    url("../src/assets/font/tabbar/iconfont.woff?t=1625219877383")
      format("woff"),
    url("../src/assets/font/tabbar/iconfont.ttf?t=1625219877383")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 25px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.active {
  color: var(--color-high-text);
}

#app{
  position: relative;
}
</style>

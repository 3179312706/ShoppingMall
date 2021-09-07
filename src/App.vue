<!--
 * @Author: your name
 * @Date: 2021-07-01 19:48:37
 * @LastEditTime: 2021-09-07 22:07:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import MainTabBar from '../src/components/content/mainTabbar/MainTabBar'
import Icon from '../src/components/content/Icon/Icon.vue';
import SvgIcon from '../src/components/content/Icon/svg.vue';

export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    MainTabBar,
    Icon,
    SvgIcon
  },
  methods: {
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

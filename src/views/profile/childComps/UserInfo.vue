<!--
 * @Author: your name
 * @Date: 2021-09-06 15:16:17
 * @LastEditTime: 2021-09-09 10:18:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\views\profile\childComps\UserInfo.vue
-->
<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <svg class="privateImage-svg left">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
        </svg>
      </slot>
      <div class="login-info left">
        <a href="https://h5.mogu.com/user-process/login.html?ptp=32.5r0Gvb.0.0.FM0SM3S3&redirect_url=https%3A%2F%2Fh5.mogu.com%2Fitem-detail%2Fnormal.html%3FitemId%3D1muux44%26acm%3D3.ms.1_4_1muux44.16.36598-102814-68998.aesxtsItA25kW.sd_117-swt_16-imt_6-t_aesxtsItA25kW-src_0-lc_16-fcid_50775-pid_3-pit_1-dit_-qpdp_0-idx_3-dm1_5002%26ptp%3D32.TL8Ov.undefined.4.sIcK7vxJ">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        </a>
        <div class="phone">
          <span>
            <svg data-v-735ff1be="" fill="#fff" class="icon-mobile"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use></svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
    </a>
  </div>
</template>

<script>
	export default {
		name: "UserInfo"
	}
</script>

<style scoped>
  #user-info {
    background-color: #ff5777;
    padding: 40px;
    margin-top: -5px;
  }

  #user-info .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .left {
    float: left;
  }

  .left a{
    color:#fff;
  }

  .right{
    margin-left: 50px;
    font-size: 30px;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #user-info .login-info .phone {
    position: relative;
    line-height: 18px;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }


  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }
</style>

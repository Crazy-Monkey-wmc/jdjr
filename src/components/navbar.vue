<template>
  <div class="navbar">
    <div class="item">
      <router-link :to="{name:'home'}">
        <div class="icon icon1"></div>
        <p class="title">首页</p>
      </router-link>
    </div>
    <div class="item">
      <router-link :to="{name:'financing'}">
        <div class="icon icon2"></div>
        <p class="title">理财</p>
      </router-link>
    </div>
    <div class="item">
      <router-link :to="{name:'IOU'}">
        <div class="icon icon3"></div>
        <p class="title">白条</p>
      </router-link>
    </div>
    <div class="item">
      <router-link :to="{name:'crowdfunding'}">
        <div class="icon icon4"></div>
        <p class="title">众筹</p>
      </router-link>
    </div>
    <div class="item">
      <router-link :to="{name:'mine'}">
        <div class="icon icon5"></div>
        <p class="title">我的</p>
      </router-link>
    </div>

  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../css/base.scss";
.navbar {
  @include list(row);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 99;
  box-sizing: border-box;
  padding: 0 0 6px;
  height: 112px;
  .item {
    flex: 1;
    text-align: center;
    margin-top: 20px;
    a {
      text-decoration: none;
      display: block;
      width: 100%;
      height: 100%;
      .icon {
        display: inline-block;
        background-repeat: no-repeat;
        width: 44px;
        height: 44px;
        background-size: 100% 100%;
        background-position: 0 0;
        &.icon1 {
          background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66);
        }
        &.icon2 {
          background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66);
        }
        &.icon3 {
          background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66);
        }
        &.icon4 {
          background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66);
        }
        &.icon5 {
          background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66);
        }
      }
      .title {
        font-size: 22px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #666;
        margin-top: 10px;
      }
      &.router-link-active {
        .title {
          color: red;
        }
        .icon1 {
          background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66);
        }
        .icon2 {
          background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t3559/44/615554467/2520/21aa9352/580f2400N4a7b5398.png?width=66&height=66);
        }
        .icon3 {
          background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t3673/27/676974575/1305/3f51b3c1/580f4e6eN6efa3e03.png?width=66&height=66);
        }
        .icon4 {
          background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t4114/213/1539606521/1876/9f736561/587d8deaNf7f37693.png?width=66&height=66);
        }
        .icon5 {
          background-image: url(//img12.360buyimg.com/jrpmobile/jfs/t3442/196/638449103/2121/46fae777/580f244eN4d27d517.png?width=66&height=66);
        }
      }
    }
  }
}
</style>

<template>
    <div class="header">
        <div class="login">
            注册&nbsp;|&nbsp;登录
        </div>
        <div class="download">APP下载</div>
        <div class="logo"></div>

    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  height: 100px;
  background-color: #f9f9f9;
  overflow: hidden;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  .login {
    font-size: 28px;
    color: #666;
    display: block;
    height: 30px;
    float: left;
    line-height: 30px;
    margin-top: 30px;
    margin-left: 24px;
  }
  .download {
    float: right;
    font-size: 24px;
    min-width: 120px;
    height: 56px;
    line-height: 56px;
    margin-top: 24px;
    background: #f04752;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    margin-right: 12px;
  }
  .logo{
      height: 56px;
      margin-top: 18px;
      background: url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) no-repeat center center;
      background-size: auto 56px;
  }
}
</style>

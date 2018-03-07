<template>
    <div class="footer">
        <div class="device">
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108">
                <p class="title">客户端</p>
            </div>
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108">
                <p class="title">触屏版</p>
            </div>
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108">
                <p class="title">电脑版</p>
            </div>
        </div>
        <ul class="content">
            <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../css/base.scss";
.footer {
  padding-top: 40px;
  margin-bottom: 132px;
  background: #f5f5f5;
  .device {
    @include list(row);
    margin-bottom: 20px;
    .item {
      flex: 1;
      text-align: center;
      img {
        width: 90px;
        height: 90px;
      }
      .title {
        font-size: 26px;
        text-align: center;
        display: block;
        color: #999;
        margin-top: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .content {
    @include list(column);
    text-align: center;
    font-size: 24px;
    color: #999;
    li {
      min-height: 40px;
      padding: 24px 32px;
      box-sizing: border-box;
      line-height: 40px;
      &::before {
        position: relative;
        top: -24px;
        content: " ";
        display: block;
        width: 100%;
        height: 2px;
        transform: scaleY(0.5);
        background: #ddd;
      }
    }
  }
}
</style>

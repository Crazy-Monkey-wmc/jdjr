<template>
  <div class="novice-privilega">
    <panel :title="'新手特权'">
      <div class="content">
        <div class="item">
          <p class="title">
            <span>下载APP</span>
            <span>送888元礼包</span>
          </p>
          <p class="desc">新手专享</p>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
        </div>
        <div class="item">
          <div class="right">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200">
            <p class="title">
              <span> </span>
              <span>领128元新手礼包</span>
            </p>
            <p class="desc">立即开通</p>
          </div>
          <div class="right">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100">
            <p class="title">
              <span>打白条</span>
              <span>享免费</span>
            </p>
            <p class="desc">立即开通享豪礼</p>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>
<script>
import panel from "@/components/panel.vue";
export default {
  components: {
    panel
  }
};
</script>
<style lang="scss" scoped>
@import "../../css/base.scss";
.novice-privilega {
  .content {
    @include list(row);
    &::before {
      content: " ";
      width: 100%;
      height: 2px;
      background: #eee;
    }
    .item {
      flex: 1;
      height: 290px;
      position: relative;
      &:first-child {
        text-align: center;
        .title {
          font-size: 0;
          margin-top: 32px;
          padding: 0 20px;
          line-height: 34px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          box-sizing: border-box;
          span {
            &:first-child {
              font-size: 26px;
              color: #333;
            }
            &:last-child {
              font-size: 26px;
              color: red;
            }
          }
        }
        .desc {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 0 20px;
          font-size: 24px;
          line-height: 32px;
          color: #999;
        }
        img {
          width: 132px;
          height: 132px;
          margin: 20px auto 28px;
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 2px;
          height: 100%;
          display: block;
          background: #eee;
        }
      }
      &:last-child {
        .right {
          height: 50%;
          overflow: hidden;
          &:last-child {
            &::before {
              display: block;
              content: " ";
              width: 100%;
              height: 2px;
              background: #eee;
            }
          }
          img {
            float: right;
            width: 80px;
            height: 80px;
            margin: 32px 28px 0 0;
          }
          .title {
            font-size: 0;
            margin-top: 32px;
            padding: 0 20px;
            line-height: 34px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            box-sizing: border-box;
            span {
              &:first-child {
                font-size: 26px;
                color: #333;
              }
              &:last-child {
                font-size: 26px;
                color: red;
              }
            }
          }
          .desc {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            padding: 0 20px;
            font-size: 24px;
            line-height: 32px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>

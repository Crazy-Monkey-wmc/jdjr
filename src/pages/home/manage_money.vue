<template>
  <div class="quick-loan">
    <panel :title="'理财精选'">
      <div class="content">
        <div class="item" v-for="(item,index) in items" :key="index">
          <p class="title">
            <span>{{item.title}}</span>
            <label>{{item.label}}</label>
          </p>
          <p class="rate">{{item.rate}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
      </div>
    </panel>
  </div>
</template>
<script>
import panel from "@/components/panel.vue";
export default {
  data() {
    return {
      items: [
        {
          title: "定期理财",
          label: "理财首选",
          rate: "5.60%",
          desc: "历史年化回报率"
        },
        {
          title: "小白理财",
          label: "理财首选",
          rate: "4.22%",
          desc: "7日年化收益率"
        },
        {
          title: "月月盈",
          label: "养老保障",
          rate: "5%",
          desc: "七日年化收益率"
        },
        {
          title: "小白基金",
          label: "天天赚钱",
          rate: "4.27%",
          desc: "7日年化收益率"
        }
      ]
    };
  },
  components: {
    panel
  }
};
</script>
<style lang="scss" scoped>
@import "../../css/base.scss";
.quick-loan {
  .content {
    @include list(row);
    .item {
      width: 50%;
      padding: 0 32px;
      height: 218px;
      box-sizing: border-box;
      .title {
        font-family: PingFangSC-Medium;
        color: #333;
        height: 42px;
        line-height: 42px;
        box-sizing: border-box;
        margin: 34px 0 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        > span {
          color: #333;
          font-weight: 700;
          font-size: 30px;
          display: block;
          float: left;
          height: 42px;
          line-height: 42px;
        }
        > label {
          height: 34px;
          line-height: 34px;
          font-size: 22px;
          padding: 0 8px;
          color: #ff5155;
          float: left;
          position: relative;
          top: 3px;
          left: 8px;
          text-align: center;
          &:before {
            min-width: 104px;
            line-height: 34px;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 200%;
            display: block;
            transform-origin: 0 0;
            box-sizing: border-box;
            border: 1px solid #ff5155;
            transform: scale(0.5, 0.5);
          }
        }
      }
      .rate {
        font-weight: 700;
        font-size: 44px;
        height: 59px;
        line-height: 58px;
        color: #ff5155;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .desc {
        font-size: 24px;
        height: 34px;
        line-height: 34px;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>

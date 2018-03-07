<template>
    <div class="life-service">
        <panel :title="'生活服务'">
            <div class="content">
                <div class="item" v-for="item in items" :key="item.title">
                    <img :src="item.src">
                    <p class="title">{{item.title}}</p>
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
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135",
          title: "惠加油",
          desc: ""
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132",
          title: "小白信用",
          desc: "全新升级"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135",
          title: "信用卡还款",
          desc: ""
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135",
          title: "卡转让",
          desc: ""
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135",
          title: "定期还款",
          desc: ""
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
.life-service {
  .content {
    @include list(row);
    padding-bottom: 40px;
    .item {
      flex: 1;
      text-align: center;
      overflow: hidden;
      img {
        width: 90px;
        height: 90px;
      }
      .title {
        font-size: 26px;
        text-align: center;
        color: #666;
        margin-top: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .desc {
        font-size: 22px;
        text-align: center;
        color: #ff801a;
        margin-top: 8px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>

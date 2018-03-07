<template>
    <div class="recommend">
        <panel :title="'In货推荐'">
            <div class="content">
                <div class="item">
                    <div class="type">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200" alt="">
                    </div>
                    <div class="goods">
                        <div class="good-item" v-for="item in keji" :key="item.name">
                            <img :src="item.src" alt="">
                            <p class="name">{{item.name}}</p>
                            <p class="price">￥{{item.price}}
                                <span>起</span>
                            </p>
                            <div class="progress-wrap">
                                <div class="progress">
                                    <div class="progress-inner" :style="{width:item.num<1?item.num*100+'%':'100%'}"></div>
                                </div>
                                <div class="num">{{item.num*100+'%'}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="type">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200" alt="">
                    </div>
                    <div class="goods">
                        <div class="good-item" v-for="item in zhineng" :key="item.name">
                            <img :src="item.src" alt="">
                            <p class="name">{{item.name}}</p>
                            <p class="price">￥{{item.price}}
                                <span>起</span>
                            </p>
                            <div class="progress-wrap">
                                <div class="progress">
                                    <div class="progress-inner" :style="{width:item.num<1?item.num*100+'%':'100%'}"></div>
                                </div>
                                <div class="num">{{item.num*100+'%'}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="type">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200" alt="">
                    </div>
                    <div class="goods">
                        <div class="good-item" v-for="item in meishi" :key="item.name">
                            <img :src="item.src" alt="">
                            <p class="name">{{item.name}}</p>
                            <p class="price">￥{{item.price}}
                                <span>起</span>
                            </p>
                            <div class="progress-wrap">
                                <div class="progress">
                                    <div class="progress-inner" :style="{width:item.num<1?item.num*100+'%':'100%'}"></div>
                                </div>
                                <div class="num">{{item.num*100+'%'}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </panel>
    </div>
</template>
<script>
import panel from "@/components/panel";
export default {
  components: {
    panel
  },
  data() {
    return {
      keji: [
        {
          src:
            "//img30.360buyimg.com/cf/s250x250_jfs/t16897/179/5503620/136988/48118941/5a57290bN52e19f82.jpg",
          name: "微型摄像机",
          price: "49.00",
          num: 3.57
        },
        {
          src:
            "//img30.360buyimg.com/cf/s250x250_jfs/t19180/119/103841930/89625/55994449/5a5d59f9N01432fde.jpg",
          name: "智能手表D1",
          price: "99.00",
          num: 7.69
        }
      ],
      zhineng: [
        {
          src:
            "//img30.360buyimg.com/cf/s250x250_jfs/t13834/192/2625202072/70435/e5b85a62/5a460eefN94289190.jpg",
          name: "智能后视镜",
          price: "90.00",
          num: 7.91
        },
        {
          src:
            "//img30.360buyimg.com/cf/s250x250_jfs/t17917/186/321392651/99329/32c1ae84/5a6c0e2cNdcabeb5c.jpg",
          name: "RELX雾化电子烟",
          price: "69.00",
          num: 5.54
        }
      ],
      meishi: [
        {
          src:
            "//img30.360buyimg.com/cf/s250x250_jfs/t19087/67/359234055/152112/75036460/5a6ecc5fN565775cd.jpg",
          name: "雪花酥",
          price: "29.00",
          num: 3.34
        },
        {
          src:
            "//img30.360buyimg.com/cf/s250x250_jfs/t14506/168/2096353267/153845/5bb0a2e6/5a6e9518N15da6f7c.jpg",
          name: "华礼脸茶",
          price: "99.00",
          num: 1.86
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.recommend {
  .content {
    .item {
      .type {
        img {
          width: 100%;
        }
      }
      .goods {
        font-size: 0;
        .good-item {
          display: inline-block;
          width: 50%;
          text-align: center;
          img {
            width: 180px;
            height: 180px;
            margin: 44px 0 22px;
          }
          .name {
            font-family: PingFangSC-Medium;
            font-size: 28px;
            font-weight: 700;
            height: 40px;
            line-height: 40px;
            margin: 0 24px;
            color: #444;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .price {
            font-weight: 700;
            font-size: 36px;
            color: #ff3232;
            > span {
              font-size: 20px;
              color: #999;
              margin-left: 4px;
              position: relative;
            }
          }
          .progress-wrap {
            height: 30px;
            padding: 0 24px 18px 36px;
            margin-top: 20px;
            .progress {
              width: 70%;
              height: 10px;
              margin-top: 10px;
              background: #f6e6e6;
              border-radius: 22px;
              float: left;
              .progress-inner {
                font-weight: 700;
                height: 10px;
                background-image: linear-gradient(
                  270deg,
                  #f55 1%,
                  #ff9c31 100%
                );
                border-radius: 22px;
              }
            }
            .num {
              font-weight: 700;
              font-size: 24px;
              color: #999;
              float: right;
              position: relative;
              top: -2px;
            }
          }
        }
      }
    }
  }
}
</style>


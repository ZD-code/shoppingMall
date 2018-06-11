<template>
    <div>
        <swiper class="swiper" :options="swiperOptions">
            <swiper-slide class="text">
                <div class="content">
4月27日，由中国人民银行、中国银行保险监督管理委员会、中国证券监督管理委员会、国家外汇管理局联合印发了《关于规范金融机构资产管理业务的指导意见》，酝酿已久的“资管新规”最终落地。作为一位上市公司股东，在监管越来越严，融资越来越难的情况下，您该如何选择合理的融资方式？

推荐一：股票买断式回购
融资与减持一体化解决方案
业务模式图：
新政下的突出优势：
1、在高比例融资的同时，降低股票质押比例；
2、提前为减持做准备。

适合的股东：

1、持股比例高的大股东，特别是持股比例在40%以上的大股东；
2、质押比例高的股东；
3、目前股价较低，想做节税的股东；
4、想大比例减持的大股东、董监高股东和特定股东；
5、资金需求量大，想高比例融资的股东；
6、想要转换持股身份的股东；
7、想要做代持的股东；
8、想充分使用每年25%股票份额限制的董监高股东；
9、想合理避开交易窗口期的大小非和董监高股东；
10、对于需要融资，但是到期后想通过减持股票还款的股东；
11、想一次性先过户交易，然后慢慢分批减持的股东。

业务优势：
推荐二：股票质押融资
合作资源丰富， 快速高效融资
业务模式图：
关键影响：
1、银监会把股票质押认定为非标业务，纳入非标额度监管，资金供给将趋紧，资金价格将上涨。
2、降杠杆，券商降低质押比例和质押率。
3、做股票质押的资管产品分级杠杆比例最高1:3，通过加夹层资金提高质押率受到很大限制，场外股票质押的质押率也将下降。

应对策略：
1、场内质押抢额度
2、场内质押转场外质押
3、拉长质押期限
4、质押比例超过集中度上限的，可以通过股票减持、代持、买断式回购等业务盘活股票，将质押比例降到集中度上限以内，再进行质押周转。
业务优势：

推荐三：大宗交易信用融资
双方约定股票持有时间及收益分配方式
业务模式图：
业务优势：
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        mousewheel: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
.text {
  font-size: 18px !important;
  text-align: left;
  padding: 30px;
  height: auto;
  box-sizing: border-box;
}
</style>
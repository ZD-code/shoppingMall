<template>
  <div class="index-conatiner">
    <van-row class="search-bar">
      <van-col span="3">
        <img :src='locationIcon' class="location-icon">
      </van-col>
      <van-col span="16">
        <input type="text" class="search-input">
      </van-col>
      <van-col span="5">
        <van-button size="mini" class="search-btn">搜索</van-button>
      </van-col>
    </van-row>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <div class="advertes">
      <div v-for="(adv,index) in advertes" :key="index">
        <a href="javascript:;">
          <img v-lazy="adv.PICTURE_ADDRESS" alt="广告" width="100%">
        </a>
      </div>
    </div>
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(goods, index) in recommends" :key="index">
            <div class="recommend-list">
              <img :src="goods.image" :alt="goods.goodsName" width="33%">
              <div class="hot-icon"><img :src="hotIcon" width="100%"></div>
              <p class="now-price">￥{{goods.mallPrice| moneyFilter}}</p>
              <p class="old-price">￥{{goods.price|moneyFilter}}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>

    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>

    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>


    <div class="hotGoods-area">
      <van-row gutter="20">
      <van-col span="12" v-for="(item, index) in hotGoods" :key="index">
        <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
      </van-col>
    </van-row>
    </div>

  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import floorComponent from "@/components/component/floorCOmponent";
import goodsInfo from "@/components/component/goodsInfoComponent";
import { toMoney } from "@/filter/moneyFilter";

import url from '@/serviceAPI.config.js'
export default {
  data() {
    return {
      locationIcon: require("../assets/images/search.png"),
      bannerPicArray: [],
      category: [],
      advertes: [],
      recommends: [],
      hotIcon: require("../assets/images/recommend.png"),
      swiperOption: {
        slidesPerview: 3,
        centeredSlides: true
      },
      floorName: "",
      floor1: [],
      floor2: [],
      floor3: [],
      hotGoods: []
    };
  },
  components: {
    swiper,
    swiperSlide,
    floorComponent,
    goodsInfo
  },
  methods: {},
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  created() {
    axios({
      url:
        "https://www.easy-mock.com/mock/5b19eb8c966c7b5e64d9cb71/shoppingMall",
      method: "get"
    })
      .then(res => {
        if (res.status === 200) {
          let resData = res.data.data;
          this.bannerPicArray = resData.slides;
          this.category = resData.category;
          this.advertes = resData.advertes;
          this.recommends = resData.recommend;
          this.floor1 = resData.floor1;
          this.floor2 = resData.floor2;
          this.floor3 = resData.floor3;
          this.floorName = resData.floorName;
          this.hotGoods = resData.hotGoods;
        }
      })
      .catch(err => {});
  }
};
</script>

<style scoped>
.index-conatiner {
  background-color: #f2f2f2;
}
.search-bar {
  height: 2.2rem;
  line-height: 2.2rem;
  background: #e5017d;
  text-align: center;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid 1px !important ;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  width: 1.4rem;
  height: 1.4rem;
  vertical-align: text-bottom;
}
.search-btn {
  vertical-align: text-bottom;
}
.swipe-area {
  width: 100%;
  height: 10rem;
  clear: both;
  overflow: hidden;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.type-bar div img {
  display: block;
  width: 2rem;
  margin: 0 auto;
}
.advertes {
  padding: 0.2rem 0.4rem 0.3rem;
}
.recommend-area {
  background-color: #fff;
}
.recommend-title {
  padding: 0.2rem 0 0.2rem 0.4rem;
  line-height: 16px;
  font-size: 14px;

  color: #e5017d;
}
.recommend-body {
  width: 100%;
  height: 10rem;
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;
  overflow: hidden;
}
.recommend-list {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border-right: 1px solid #eeeeee;
  font-size: 12px;
  text-align: center;
}
.hot-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.hotGoods-area{
  width:100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
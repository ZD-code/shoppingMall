<template>
    <div>
        <div class="floor-name">
      <span>{{floorTitle}}</span>
    </div>
        <div class="floor">
            <div class="floor-anomaly">
                <div class="floor-one">
                    <img :src="floorData0.image" alt="" width="100%">
                </div>
                <div>
                    <div class="floor-two">
                        <img :src="floorData1.image" alt="" width="100%">
                    </div>
                    <div>
                        <img :src="floorData2.image" alt="" width="100%">
                    </div>
                </div>
            </div>
            <div class="floor-rule">
                <div v-for="(item,index) in floorData.slice(3)" :key="index">
                    <img :src="item.image" alt="" width="100%">
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  props: ["floorData",'floorTitle'],
  data() {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {}
    };
  },
  created() {},
  watch: {
    floorData: function(val) {
      this.floorData0 = val[0];
      this.floorData1 = val[1];
      this.floorData2 = val[2];
    }
  }
};
</script>

<style scoped>
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  width: 10rem;

  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #ddd;
}
.floor-two {
  border-bottom: 1px solid #ddd;
}
.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}
.floor-rule div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 10rem;
  border-bottom: 1px solid #ddd;
}
.floor-rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}
.floor-name {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
.floor-name span {
  /* padding-left:4rem; */
  font-size: 16px;
  color: #e83714;
}
</style>
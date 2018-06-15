<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
        >
            <van-cell v-for="item in list" :key="item" :title="item"></van-cell>
        </van-list>

       <div>
            <van-tabbar v-model="active">
            <van-tabbar-item icon="shop" dot>标签1</van-tabbar-item>
            <van-tabbar-item icon="shop" info='5'>标签2</van-tabbar-item>
            <van-tabbar-item icon="shop">标签3</van-tabbar-item>
            <van-tabbar-item icon="shop">标签4</van-tabbar-item> 
        </van-tabbar>
       </div>

        <!-- <div>
            <van-tabbar v-model="active">
  <van-tabbar-item icon="shop">
    <span>自定义</span>
    <template slot="icon" slot-scope="props">
      <img :src="props.active ? icon.active : icon.normal" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="chat">标签</van-tabbar-item>
  <van-tabbar-item icon="records">标签</van-tabbar-item>
</van-tabbar>
        </div> -->

    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      active: 0,
      icon: {
        active: "//img.yzcdn.cn/2.png",
        normal: "//img.yzcdn.cn/1.png"
      }
    };
  },
  methods: {
    onLoad() {
      // this.loading = true;
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style scoped>
</style>
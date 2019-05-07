<template>
  <div>
    <van-notice-bar mode="closeable">恭喜四组又一次荣获胜利！！！普天同庆 ！！！ 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</van-notice-bar>
    <van-swipe :autoplay="3000">
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
        id="van-swipe-item"
        @click="href(index)"
      >
        <img v-lazy="image">
      </van-swipe-item>
    </van-swipe>
    <van-row type="flex" justify="space-around">
      <van-col span="6">
        <router-link to="news">
          <img src="../../assets/images/menu1.png">
          <p class="t">新闻资讯</p>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="news">
          <img src="../../assets/images/menu2.png" alt>
          <p class="t">图片分享</p>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="news">
        <img src="../../assets/images/menu3.png" alt>
        <p class="t">商品购买</p>
        </router-link>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col span="6">
        <router-link to="news">
        <img src="../../assets/images/menu4.png" alt>
        <p class="t">留言反馈</p>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="news">
        <img src="../../assets/images/menu5.png" alt>
        <p class="t">视频专区</p>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="news">        
        <img src="../../assets/images/menu6.png" alt>
        <p class="t">联系我们</p>
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  created() {
    this.getlunbo();
  },
  methods: {
    async newslist() {
      // const data = await this.$http.get('/api/getnewslist')
      // console.log(data)
    },
    href(index) {
      window.location.replace(this.urls[index]);
    },
    async getlunbo() {
      const { data } = await this.$http.get("/api/getlunbo");
      data.message.forEach(item => {
        this.images.push(item.img);
        this.urls.push(item.url);
      });
    }
  },
  data() {
    return {
      text: [],
      images: [],
      urls: []
    };
  }
};
</script>


<style scope>
.van-row {
  margin-top: 15px;
  margin-bottom: 20px;
}
.van-col--6 img {
  width: 60px;
  height: 60px;
}
.t {
  font-size: 13px;
  margin-top:5px 
}
</style>


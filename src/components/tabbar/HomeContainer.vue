<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index" id="van-swipe-item">
        <img v-lazy="image"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  created(){ this.getlunbo()},
  methods:{
    async getlunbo(){
      const {data} = await this.$http.get('/api/getlunbo')
      console.log(data)
      data.message.forEach(item => {
        this.images.push(item.img)
      });
      console.log(this.images)
    }
  },
  data() {
    return {
       images: []
    };
  }
};
</script>


<style>

</style>


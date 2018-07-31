<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1807/11/c095d59922775602.jpg_750x200_977527bb.jpg"></swiper-slide>
      <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg"></swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 27%
    .swiper-img
      width: 100%
      display: block
      height:100%
</style>

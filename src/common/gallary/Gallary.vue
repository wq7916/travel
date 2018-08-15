<template>
  <div class="img" @click="gallaryHide">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide class="slide" v-for="(item, index) in imgs" :key="index">
          <img class="swiper-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array
    },
    gallaryShow: {
      type: Boolean
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    gallaryHide: function () {
      let show = !this.gallaryShow
      this.$emit('gallaryS', show)
    }
  }
}
</script>

<style scoped lang="stylus">
  .img >>> .swiper-container
    overflow: inherit
  .img
    position:fixed
    width: 100%
    height: 100%
    top:0
    left:0
    overflow: hidden
    background: #000
    display: flex
    justify-content: center
    flex-direction: column
    .wrapper
      background:#fff
      .slide
        img
          width: 100%
          height:100%
          display: block
      .swiper-pagination
        color:#fff
        bottom:-40px;
</style>

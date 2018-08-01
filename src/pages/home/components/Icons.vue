<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-con" :src="item.imgUrl">
          </div>
          <p class="desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Icons',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height:0
    padding-bottom: 50%
  .icons
    margin-top:0.1rem
    .icon
      overflow: hidden
      float: left
      width: 25%
      padding-bottom: 25%
      position:relative
      .icon-img
        position:absolute
        left:0
        right:0
        top:0
        bottom:0.44rem
        box-shadow: box-sizing
        padding:0.1rem
        .icon-img-con
          height:100%
          display: block
          margin:0 auto
      .desc
        position:absolute
        left:0
        right: 0
        bottom: 0
        height:0.44rem
        line-height:0.44rem
        color:$darkTextColor
        font-size:12px
        text-align: center
        ellipsis()
</style>

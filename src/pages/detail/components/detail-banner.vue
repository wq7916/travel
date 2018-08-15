<template>
  <div>
    <div class="banner" @click="gallaryClick" v-if="dataGallary">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
      <div class="info">
        <div class="banner-title">
          {{dataGallary.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{gallaryLength}}
        </div>
      </div>
    </div>
    <gallary :imgs="imgArr" :gallaryShow="gallaryShow" v-show="gallaryShow" @gallaryS="gallaryS"></gallary>
  </div>
</template>

<script>
import axios from 'axios'
import gallary from 'common/gallary/Gallary'
export default {
  name: 'detail-banner',
  data () {
    return {
      imgArr: [],
      gallaryShow: false,
      dataGallary: {},
      gallaryLength: 0
    }
  },
  mounted () {
    this.getImg()
  },
  methods: {
    getImg () {
      axios.get('/api/detail.json')
        .then(this.getImgArr)
    },
    getImgArr (res) {
      console.log(res)
      this.imgArr = res.data.data.gallaryImgs
      this.dataGallary = res.data.data
      this.gallaryLength = this.dataGallary.gallaryImgs.length
    },
    gallaryClick: function () {
      this.gallaryShow = true
    },
    gallaryS (show) {
      this.gallaryShow = show
    }
  },
  components: {
    gallary
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position: relative
    overflow: hidden
    height:0
    padding-bottom: 55%
    .banner-img
      width:100%
    .info
      display: flex
      width: 100%
      line-height: .6rem
      background: rgba(0,0,0,0.5)
      position:absolute
      bottom:0
      left:0
      .banner-title
        flex: 1
        color:#fff
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        color:#fff
        .banner-icon
          font-size: .24rem
          color:#fff
</style>

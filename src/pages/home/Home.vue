<template>
  <div class="home">
    <Header :city="city"></Header>
    <Swiper :list="swiperList"></Swiper>
    <Icons :list="iconList"></Icons>
    <Recommend :list="recommendList"></Recommend>
    <Weekend :list="weekendList"></Weekend>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/recommend'
import Weekend from './components/Weekend'
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      console.log(res.data)
      this.swiperList = res.data.data.swiperList
      this.iconList = res.data.data.iconList
      this.recommendList = res.data.data.recommendList
      this.weekendList = res.data.data.weekendList
    }
  },
  components: {
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  }
}
</script>

<style scoped lang="stylus">

</style>

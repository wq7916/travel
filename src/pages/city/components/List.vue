<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="hot in hotCity" :key="hot.id" @click="handerCity(hot.name)">
            <div class="button">{{hot.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in listCity"
           :key="key"
           :ref="key">
        <div class="title border-bottom">{{key}}</div>
        <div class="item-list">
          <ul>
            <li class="item border-bottom" v-for="innerItem of item"
                :key="innerItem.id" @click="handerCity(innerItem.name)">{{innerItem.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    hotCity: {
      type: Array
    },
    listCity: {
      type: Object
    },
    letterHtml: {
      type: String
    }
  },
  watch: {
    letterHtml () {
      if (this.letterHtml) {
        const element = this.$refs[this.letterHtml][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    })
  },
  methods: {
    handerCity (cityName) {
      this.$store.dispatch('changeCity', cityName)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position:absolute
    left:0
    right:0
    top:1.58rem
    bottom:0
    .title
      padding-left:0.2rem
      color: #212121
      height:0.54rem
      background: #eee
      line-height:0.54rem
    .button-list
      padding:0.1rem 0.6rem 0.1rem 0.1rem
      overflow: hidden
      .button-wrapper
        width: 33.33%
        float:left
        .button
          padding:0.1rem 0;
          text-align: center
          border:0.02rem solid #ccc
          border-radius: 5px
          margin:0.1rem
    .item-list
      .item
        line-height:0.76rem
        color:#666
        padding-left:0.2rem
</style>

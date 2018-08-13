<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyWord" placeholder="输入城市或者拼音" class="search-input">
    </div>
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li class="item border-bottom" v-for="(item, index) in list" :key="index">{{item.name}}</li>
        <li class="item border-bottom" v-show="hasNoData">
          暂无数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Search',
  props: {
    listCity: {
      type: Object
    }
  },
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.listCity) {
          this.listCity[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .search
    height:0.72rem
    padding:0 0.1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    position:absolute
    overflow: hidden
    left:0
    top:1.58rem
    bottom:0
    right:0
    z-index:1
    background: #EEEEEE
    .item
      line-height: 0.62rem
      padding-left:0.2rem
      background:#fff
      color:#666
</style>

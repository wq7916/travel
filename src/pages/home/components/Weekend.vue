<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) in list" :key="index">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .title
    line-height:0.8rem
    background:#EEEEEE
    font-size:12px
    text-indent: 0.2rem
  .item
    .item-img
      width:100%
      display:block
    .item-content
      padding:0.1rem
      min-width:0
      .item-title
        line-height:0.54rem
        font-size:0.32rem
        ellipse()
      .item-desc
        line-height:0.4rem
        color: #cccccc
</style>

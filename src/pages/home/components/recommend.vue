<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link :to="'/detail/' + item.id" tag="li" class="item border-bottom" v-for="(item, index) in list" :key="index">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
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
    margin-top:0.2rem
  .item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      flex:0 0 1.7rem
      width:1.7rem
      height:1.7rem
      margin:0.1rem
    .item-content
      flex: 1
      padding:0.1rem
      min-width:0
      .item-title
        line-height:0.54rem
        font-size:0.32rem
        ellipse()
      .item-desc
        line-height:0.4rem
        color: #cccccc
      .item-button
        margin-top:0.2rem
        background: #ff9300
        padding:0 0.1rem
        border-radius: 0.6rem
        color: #ffffff
</style>

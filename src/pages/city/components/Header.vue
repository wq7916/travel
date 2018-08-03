<template>
  <div class="head">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    <p class="title">城市选择</p>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .head
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .back-icon
      font-size:0.4rem
      position:absolute
      left:0
      top:0
      color: #fff
    .title
      font-size:0.32rem
      text-align: center

</style>

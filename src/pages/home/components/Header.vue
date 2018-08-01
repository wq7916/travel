<template>
  <div class="headerCon">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .headerCon
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    font-size:12px
    .header-left
      width: 0.64rem
      flex: 0 0 0.64rem
      text-align: center
      .back-icon
        font-size: 0.4rem
    .header-input
      flex: 1
      background: #fff
      border-radius: 0.1rem
      margin-top:0.12rem
      margin-left:0.2rem
      padding-left:0.2rem
      height:0.64rem
      line-height: 0.64rem
      color:#ccc
    .header-right
      width: 1.24rem
      flex: 0 0 1.24
      text-align: center
      color:#fff
      .arrow-icon
        font-size: 0.24rem
        margin-left:-0.06rem
</style>

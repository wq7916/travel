<template>
  <div class="search">
    <input type="text" value="" placeholder="输入城市或者拼音" class="search-input">
  </div>
</template>

<script>
export default {
  name: 'Search'
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
</style>

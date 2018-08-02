<template>
  <div class="alphabet">
    <ul>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alphabet'
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .alphabet
    display: flex
    flex-direction: column
    justify-content: center
    position:absolute
    right:0.1rem
    top:1.58rem
    bottom:0
    width:0.4rem
    z-index:1000
    .item
      line-height:0.44rem
      text-align: center
      color:$bgColor
</style>

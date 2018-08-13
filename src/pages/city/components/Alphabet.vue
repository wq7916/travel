<template>
  <div class="alphabet">
    <ul>
      <li class="item" v-for="(item, key) in listCity" :key="key" @click="clickTarget" :ref="key" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    listCity: {
      type: Object
    }
  },
  data () {
    return {
      isTouch: false,
      aTop: 0,
      timer: null
    }
  },
  computed: {
    letterArray () {
      let arr = []
      for (let key in this.listCity) {
        arr.push(key)
      }
      return arr
    }
  },
  updated () {
    this.aTop = this.$refs['A'][0].offsetTop
  },
  methods: {
    clickTarget: function (e) {
      this.$emit('letter', e.target.innerHTML)
    },
    touchstart () {
      this.isTouch = true
    },
    touchmove (e) {
      if (this.isTouch) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let touchY = e.touches[0].clientY - 79
          let index = Math.floor((touchY - this.aTop) / 20)
          if (index >= 0 && index < this.letterArray.length) {
            this.$emit('letter', this.letterArray[index])
          }
        }, 16)
      }
    },
    touchend () {
      this.isTouch = false
    }
  }
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

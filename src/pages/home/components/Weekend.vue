<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) in recommendList" :key="index">
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
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          title: '八达岭野生动物园',
          desc: '数百年的宫廷庙宇，至今依旧威严霸气'
        },
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          title: '八达岭野生动物园',
          desc: '数百年的宫廷庙宇，至今依旧威严霸气'
        },
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          title: '八达岭野生动物园',
          desc: '数百年的宫廷庙宇，至今依旧威严霸气'
        }
      ]
    }
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

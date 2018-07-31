<template>
  <div class="home">
    <Header></Header>
    <Swiper></Swiper>
  </div>
</template>

<script>
import Header from './components/Header'
import Swiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper
  }
}
</script>

<style scoped lang="stylus">

</style>

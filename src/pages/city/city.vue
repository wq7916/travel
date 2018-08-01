<template>
  <div class="city">
    <Header></Header>
    <Search></Search>
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
export default {
  name: 'city',
  components: {
    Header,
    Search
  }
}
</script>

<style scoped lang="stylus">
</style>

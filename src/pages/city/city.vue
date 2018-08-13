<template>
  <div class="city">
    <Header></Header>
    <Search :listCity="listCity"></Search>
    <keep-alive>
      <List :hotCity="hotCity" :listCity="listCity" :letterHtml="letterHtml"></List>
    </keep-alive>
    <Alphabet :listCity="listCity" @letter="letter"></Alphabet>
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      listCity: {},
      hotCity: [],
      letterHtml: ''
    }
  },
  mounted () {
    this.getDataCity()
  },
  methods: {
    getDataCity () {
      axios.get('/api/city.json')
        .then(this.getDataCitySuccess)
    },
    getDataCitySuccess (res) {
      if (res.data.ret) {
        this.hotCity = res.data.data.hotCities
        this.listCity = res.data.data.cities
        console.log(this.listCity)
      }
    },
    letter (innHtml) {
      this.letterHtml = innHtml
    }
  },
  components: {
    Header,
    Search,
    List,
    Alphabet
  }
}
</script>

<style scoped lang="stylus">
</style>

<template>
<div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="城市名/拼音"  />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id"
        @click="handlecityclick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom"  v-show="hasList">
          没有找到匹配数据
        </li>
      </ul>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll' // 解决滚动需求
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  methods: {
    handlecityclick (city) {
      this.changecity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changecity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => { // 搜索时加上延时，减少资源损耗
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) { // 判断搜索的字母和名字含有
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, {click: true}) // 解决滚动需求，需要增加click
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height:.72rem
  padding:.1rem
  background:$bgcolor
  .search-input
    box-sizing:border-box
    width:100%
    height:.62rem
    padding:0.35rem
    line-height:.62rem
    text-align:center
    border-radius:.1rem
    color:#666
.search-content
  z-index:1
  overflow:hidden
  position:absolute
  top:1.70rem
  left:0
  right :0
  bottom :0
  background:#eee
  .search-item
    line-height:.62rem
    padding-left :.2rem
    background:#fff
    color: #666
</style>

<template>
    <div class="icons">
      <swiper :options="swiperOption">
       <swiper-slide v-for='(page, index) of pages' :key='index'>
      <div class="icon"
      v-for='item of page'
      :key='item.id'>
        <div class="icon-img">
        <img class="icon-imgcontent" :src='item.imgUrl'/>
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
       </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8) // 控制一页只有8个
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }

}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.icons >>>.swiper-container
  height:0
  padding-bottom:50%
.icon
  position:relative
  overflow:hidden
  float:left
  width:25%
  height:0
  padding-bottom:25%
  .icon-img
    position:absolute
    top:0
    left:0
    right:0
    box-sizing:border-box
    bottom:.44rem
    .icon-imgcontent
      display:block
      height :100%
      margin:0 auto
  .icon-desc
    position:absolute
    left:0
    right:0
    bottom:0
    height:.44rem
    line-height:.44rem
    text-align:center
    color:$darkTextcolor
    overflow:hidden
    white-space:nowrap
    text-overflow:ellipsis
</style>

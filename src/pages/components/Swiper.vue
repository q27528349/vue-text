
<template>
<div class="wrapper">
<swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 用于轮播图下的小圆点
        loop: true // 循环
      },
      swiperList: [{
        id: '001',
        imgurl: 'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }, {
        id: '002',
        imgurl: 'https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
      }]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length // 这里做了一个存在时再显示 因为开始时有空数组
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background :#fff
.wrapper
  overflow:hidden
  width:100%
  height:0
  padding-bottom:31.25%
  .swiper-img
    width :100%
</style>

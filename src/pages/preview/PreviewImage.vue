<template>
    <div class="preview-wrapper">
      <div class="swipe-wrapper">
        <van-swipe :show-indicators="false"  :initial-swipe="currentIndex" @change="pageChange">
          <van-swipe-item v-for="item of previewList" :key="item._id" >
            <img :src="item.url" alt=""/>
          </van-swipe-item>
        </van-swipe>
        <indicator :index="indexObject" class="indicator"></indicator>
      </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import Indicator from './component/Indicator'
export default {
  name: 'PreviewImage.vue',
  components: {
    [Swipe.name]: Swipe,
    Indicator,
    [SwipeItem.name]: SwipeItem
  },
  data () {
    return {
      currentIndex: 0,
      previewList: [],
      indexObject: {
        current: 0,
        total: 0
      }
    }
  },
  mounted () {
    this.currentIndex = this.$route.params.currentIndex
    this.previewList = this.$route.params.imgs
    this.indexObject = {
      current: this.currentIndex,
      total: this.previewList.length
    }
  },
  methods: {
    pageChange (index) {
      console.log('fuck')
      this.indexObject = {
        current: index,
        total: this.previewList.length
      }
    }
  }

}
</script>

<style scoped lang="stylus">
.preview-wrapper
    background #000
    position: fixed
    left 0
    right 0
    top 0
    bottom 0
    .swipe-wrapper
      margin-top 50%
      position: relative;
      .indicator
        position: absolute;
        bottom 0
        width 100%
        display flex
        align-items center
      img
        width 100%
        height 600px
        object-fit cover

</style>

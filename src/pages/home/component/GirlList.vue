<template>
    <div class="girl-list-wrapper">
       <div class="item" v-for="item of imgArray" :key='item._id'>
         <img v-lazy="item.url"  alt="" />
       </div>
      <div :class="['float-btn' ,doRotate?'rotate':'']" @click="refresh">
        <i :class="['iconfont', animateFinish?'iconcheck':'iconRefresh']"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: 'GirlList.vue',
  data () {
    return {
      doRotate: false// 执行旋转动画
    }
  },
  props: {
    animateFinish: {
      type: Boolean
    },
    imgArray: {
      type: Array
    }
  },
  methods: {
    // 刷新福利图片
    refresh () {
      this.doRotate = true
      this.$emit('refreshGirl')
    }
  },
  watch: {
    animateFinish: function (val) {
      console.log(`当前动画是否结束:${val}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .girl-list-wrapper
      column-count 3
      column-width 33%
      margin-top 80px
      column-gap 5px
      &>div
        margin-bottom 5px
        border-radius 25px
        padding 5px
        overflow hidden
        break-inside avoid
        &>img
          width 100%
          height 100%
      .float-btn
        background themeColor
        width 80px
        height: 80px
        border-radius 50%
        color white
        position fixed
        justify-content center
        align-items center
        display flex
        right 50px
        bottom 60px
        &>i
          font-size 50px
      .rotate
        animation rotate 1s linear infinite
  @keyframes  rotate
      from{
        transform rotate(0deg)
      }
      to{
        transform rotate(359deg)
      }
</style>

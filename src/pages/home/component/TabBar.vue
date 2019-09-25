<template>
    <div class="tab-wrapper" :style="{opacity:alpha}" >
      <ul>
        <li :key="index" v-for="(item,index) of arrays" :class="[currentIndex===index?'active':'']" @click="selectTab(index)">{{item}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      alpha: 0,
      currentIndex: 0
    }
  },
  name: 'TabBar',
  props: {
    arrays: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.bus.$on('sendOpacity', value => {
      this.alpha = value
    })
  },
  methods: {
    selectTab (index) {
      this.currentIndex = index
      this.$emit('getSelectTab', index)
    }
  }
}
</script>

<style scoped lang="stylus">
  .tab-wrapper
    display flex
    position: fixed;
    left 0
    right 0
    background white
    top 0
    width 100%
    &>ul
      display flex
      width 100%
      justify-content space-around
      align-items: center
      height 80px
      &>li
        position relative
        font-size 28px
        display flex
        align-items center
        justify-content center
        flex 1
        padding 20px
        color #000
      &>li::before
        position absolute
        content ''
        top:0
        left 100%
        width 0
        height 100%
        transition: 0.1s all linear
        border-bottom 1px solid themeColor
      .active
        color themeColor
      .active::before
        top:0
        left 0
        width 100%
      .active~li::before
        left 0

</style>

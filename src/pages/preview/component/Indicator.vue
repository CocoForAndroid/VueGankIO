<template>
    <div class="indicator-wrapper">
        <div>{{text}}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  name: 'Indicator',
  props: {
    index: {
      type: Object
    }
  },
  mounted () {
    this.text = this.index.current + '/' + this.index.total
  },
  watch: {
    index: function (val) {
      console.log(`indexObject ${val}`)
      this.text = (val.current + 1) + '/' + val.total
    }
  }
}
</script>

<style scoped lang="stylus">
  .indicator-wrapper
    display flex
    padding 10px
    background rgba(0,0,0,.5)
    height 60px
    &>div
      font-size 28px
      color white
</style>

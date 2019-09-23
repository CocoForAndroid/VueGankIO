<template>
  <div class="wrapper">
    <tab-bar :arrays="tabs"></tab-bar>
    <img src=""/>
  </div>
</template>

<script>
import { getLatestGankData } from '../../request/api'
import TabBar from './component/TabBar'
export default {
  data () {
    return {
      tabs: ['闲读', 'Android', 'IOS', '福利', '前端']
    }
  },
  name: 'Home',
  components: { TabBar },
  mounted () {

  }
}
</script>

<style scoped lang="stylus">

</style>

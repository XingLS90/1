<template>
  <div class="information">
    <router-link to="/" class="iconfont icon">&#xe50a;</router-link>
    <information-header></information-header>
    <information-main></information-main>
    <information-supplement></information-supplement>
  </div>
</template>

<script>
import InformationHeader from './pages/header'
import InformationMain from './pages/main'
import InformationSupplement from './pages/supplement'
export default {
  name: 'Information',
  components: {
    InformationHeader,
    InformationMain,
    InformationSupplement
  }
}
</script>

<style scoped lang="stylus">
  .information
    font-size: .12rem
    padding: 0 .16rem
    font-family: FZLTZHJW--GB1
    .icon
      display: block
      width: 100%
      margin: .23rem 0 .23rem 0
      font-size: .2rem
      color: #2E2F4F
</style>

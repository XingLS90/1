<template>
  <div class="information">
    <router-link to="/information" class="iconfont icon">&#xe50a;</router-link>
    <information-header1></information-header1>
    <personal-detail></personal-detail>
  </div>
</template>

<script>
import InformationHeader1 from './pages/header1'
import PersonalDetail from './pages/personalDetail'
export default {
  name: 'Information1',
  components: {
    InformationHeader1,
    PersonalDetail
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

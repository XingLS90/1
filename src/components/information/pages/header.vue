<template>
  <div class="header">
    <div class="title"><img src="../../../assets/images/step1.png"></div>
    <p class="family-info">家庭信息<span>地址信息仅用于为您提供上门安装服务</span></p>
  </div>
</template>

<script>
export default {
  name: 'InformationHeader',
  data () {
    return {
      isback: false
    }
  }
}
</script>

<style scoped lang="stylus">
  .header >>> .border::before
    border-color: #000
  .header
    display: flex
    flex-direction: column
    justify-content: space-around
    .title
      height: .67rem
      margin-bottom: .2rem
      img
        height: 100%
    .family-info
      font-size: .12rem
      color: #888
      span
        margin-left: .32rem
</style>

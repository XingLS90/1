<template>
  <div class="successful">
    <router-link to="/information1" class="iconfont icon">&#xe50a;</router-link>
    <div class="auto">
      <img src="../../assets/images/succ.png">
      <p class="title">预约成功</p>
      <p class="explain">您的服务经理将会尽快与您取得联系，为您安排服务</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Successful'
}
</script>

<style scoped lang="stylus">
  .successful
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    padding: 0 .16rem
    .icon
      display: block
      width: 100%
      margin: .23rem 0 .23rem 0
      font-size: .2rem
      color: #2E2F4F
    .auto
      position: absolute
      left: 0
      right: 0
      top: 2.17rem
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: center
      margin: auto
      height: 1.2rem
      img
        width: .37rem
        height: .37rem
      .title
        font-size: .28rem
        color: #626262
      .explain
        font-size: .12rem
        color: #999
</style>

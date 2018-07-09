<template>
  <div class="home">
    <router-link to="/" class="iconfont icon">&#xe50a;</router-link>
    <div class="location"><img src="../../assets/images/loacation.png"></div>
    <div class="home-title">
      <p>联想家庭网络调优</p>
      <p class="home-title-de">信号扩展，WiFi覆盖无死角</p>
    </div>
    <router-link to="/information" class="home-order"><img src="../../assets/images/order.png"></router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="stylus">
  .home
    display: flex
    flex-direction: column
    align-items: center
    position: absolute
    top: 0
    bottom: 0
    width:3.75rem;
    height:6.67rem;
    font-size: .14rem
    font-family: FZLTXHJW--GB1
    background:rgba(255,255,255,1) linear-gradient(180deg,#7E71FF,#C688FF)
    .icon
      display: block
      width: 100%
      margin: .23rem 0 1rem .2rem
      font-size: .2rem
      color: #2E2F4F
    .location
      display: flex
      align-items: center
      height: 1.46rem
      img
        width: 3.41rem
        height: 1.2rem
    .home-title
      display: flex
      flex-direction: column
      align-items: center
      height: .61rem
      margin-top: .4rem
      font-size: .29rem
      color: #fff
      .home-title-de
        margin-top: .22rem
        font-size: .14rem
        opacity: .8
    .home-order
      position: absolute
      bottom: .67rem
      img
        width: 2.8rem
</style>

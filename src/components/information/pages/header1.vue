<template>
  <div class="header">
    <div class="title"><img src="../../../assets/images/step2.png"></div>
  </div>
</template>

<script>
export default {
  name: 'InformationHeader1'
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
</style>

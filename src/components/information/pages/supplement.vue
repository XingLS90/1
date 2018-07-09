<template>
  <div class="supp">
    <div class="title"><img src="../../../assets/images/issue.png"></div>
    <div v-for="(item,index) of list" :id="item.id" :key="index" class="item border-bottom">
      <input class="select" type="checkbox" :key="item.id" :value="item.msg" v-model="checkedNames">
      <label class="select-state" :for="item.id">{{item.msg}}</label>
    </div>
    <div class="item border-bottom">
      <input class="select" type="checkbox" :value="rests" ref="dom" @change="handleInpVal">
      <input class="issue" type="text" placeholder="其他问题：" ref="dom1" v-model="rests" @change="handleInpVal"  @click="hangleDataStore">
    </div>
    <router-link to="/information1" class="next">
      <img src="../../../assets/images/next.png">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'InformationSupplement',
  data () {
    return {
      list: [
        {id: 'a', msg: '信号不稳定（掉线）：重要文件传输中断，游戏狂high中闪退......'},
        {id: 'b', msg: '信号覆盖不佳（部分区域信号差或无信号）：洗手间没信号，不开心......'},
        {id: 'c', msg: '网速慢：明明办了100M的宽带，看视频居然还卡......'}],
      handleBorder: true,
      checkedNames: [],
      rests: ''
    }
  },
  methods: {
    handleInpVal () {
      if (this.$refs.dom.checked) {
        this.checkedNames[3] = this.rests
      } else {
        this.checkedNames.pop(this.rests)
      }
    },
    hangleDataStore () {
      let value = this.checkedNames
      let address = ''
      let num = 1
      for (let i of value) {
        if (i) {
          address += (num++) + '、' + i + ' '
        }
      }
      this.$store.commit('networkProblem', address)
    }
  }
}
</script>

<style scoped lang="stylus">
  .supp
    display: flex
    flex-direction: column
    .title
      width: 2.29rem
      height: .14rem
      margin-bottom: .2rem
      img
        width: 100%
    .item
      display: flex
      align-items: center
      height: .6rem
      line-height: .2rem
      .select
        width: .15rem
        height: .15rem
        margin-right: .14rem
      .select-state
        flex: 1
        font-size: 0.13rem
        color: #333
      .issue
        width: 3.14rem
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
    .next
      position: absolute
      top: 6.1rem
      left: .48rem
      width: 2.8rem
      height: .4rem
      img
        width: 100%
    .rests
      position: absolute
      top: 5.6rem
      left:.45rem
</style>

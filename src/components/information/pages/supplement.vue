<template>
  <div class="supp">
    <div class="title"><img src="../../../assets/images/issue.png"></div>
    <div class="item border-bottom">
      <input id="a" class="select" ref="a" type="checkbox" :value="service1">
      <label class="select-state" for="a">{{service1}}</label>
    </div>
    <div class="item border-bottom">
      <input id="b" class="select" ref="b" type="checkbox" :value="service2">
      <label class="select-state" for="b">{{service2}}</label>
    </div>
    <div class="item border-bottom">
      <input id="c" class="select" ref="c" type="checkbox" :value="service3">
      <label class="select-state" for="c">{{service3}}</label>
    </div>
    <div class="item border-bottom">
      <input
        class="select"
        type="checkbox"
        ref="d"
        @change="handleInpVal">
      <input
        maxlength="200"
        class="issue"
        type="text"
        :value="other"
        disabled=true
        ref="d1"
        @change="handleInpVal"
        @click="handleInpValClick">
    </div>
    <p class="next" @click="handleSubmitMsg">
      <img src="../../../assets/images/next.png">
    </p>
  </div>
</template>

<script>
export default {
  name: 'InformationSupplement',
  data () {
    return {
      service1: '信号不稳定（掉线）：重要文件传输中断，游戏狂high中闪退......',
      service2: '信号覆盖不佳（部分区域信号差或无信号）：洗手间没信号，不开心......',
      service3: '网速慢：明明办了100M的宽带，看视频居然还卡......',
      other: '其他问题：',
      show: false
    }
  },
  methods: {
    handleInpVal () {
      if (this.$refs.d.checked) {
        this.$refs.d1.disabled = false
      } else {
        this.$refs.d1.disabled = true
      }
    },
    handleInpValClick () {
      this.$refs.d1.value = ''
    },
    handleSubmitMsg () {
      if (this.$refs.a.checked) {
        let value = this.$refs.a.value
        this.$store.commit('service1', value)
      }
      if (this.$refs.b.checked) {
        let value = this.$refs.b.value
        this.$store.commit('service2', value)
      }
      if (this.$refs.c.checked) {
        let value = this.$refs.c.value
        this.$store.commit('service3', value)
      }
      if (this.$refs.d.checked) {
        if (this.$refs.d1.value !== '其他问题：') {
          let value = this.$refs.d1.value
          this.$store.commit('other', value)
        }
      }
      if (this.$refs.a.checked || this.$refs.b.checked || this.$refs.c.checked || (this.$refs.d.checked && this.$refs.d1.value !== '其他问题：')) {
        this.show = true
      } else {
        this.show = false
      }

      if (this.$store.state.product && this.$store.state.address && this.$store.state.specificaddress && this.show) {
        this.$router.push('/information1')
      }
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

<template>
  <div class="main">
    <div class="list border-bottom">
      <span class="title">户型选择</span>
       <popup-picker :data="list2" v-model="value2_2"  @on-change="onShadowChange1" placeholder="请选择您家的户型大小"></popup-picker>
   </div>
    <div class="list border-bottom">
      <span class="title">所在地</span>
      <group>
        <x-address title='' v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="省-市-区"></x-address>
      </group>
    </div>
    <div class="list border-bottom">
      <span class="title">详细地址</span>
      <input class="detail" type="text" maxlength="50" v-model="placeholder" placeholder="详细地址、门牌号" @change="onSiteChange">
    </div>
  </div>
</template>

<script>
import { Group, XAddress, ChinaAddressV4Data, XButton, Cell, PopupPicker, Value2nameFilter as value2name } from 'vux'
export default {
  name: 'Main',
  data () {
    return {
      value_0_1: [],
      value: [],
      value2: ['天津市', '市辖区', '和平区'],
      value3: ['广东省', '中山市', '--'],
      addressData: ChinaAddressV4Data,
      value4: [],
      value5: ['广东省', '深圳 市', '南山区'],
      placeholder: '',
      list2: [['80平米以下', '80-120平米', '120平米以上'], ['单式', '复式']],
      value2_2: [],
      showPopupPicker: false,
      switch6: false,
      format: function (value, name) {
        return `${value[0]}:${value[1]}`
      }
    }
  },
  components: {
    Group,
    XAddress,
    XButton,
    Cell,
    PopupPicker
  },
  methods: {
    changeData () {
      this.value2 = ['430000', '430400', '430407']
    },
    changeDataByLabels () {
      this.value2 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2 () {
      this.value2 = ['广东省', '中山市', '--']
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    onShadowChange1 (value) {
      let product = ''
      for (let i of value) {
        product += i + ' '
      }
      this.$store.commit('changeHouseSize', product)
    },
    onShadowChange (ids, value) {
      let address = ''
      for (let i of value) {
        address += i + ' '
      }
      this.$store.commit('location', address)
    },
    onSiteChange () {
      let value = this.placeholder
      this.$store.commit('detailedAddress', value)
    }
  }
}
</script>

<style scoped lang="stylus">
  .main >>> .weui-cells:before
    border: 0
  .main >>> .vux-no-group-title
    margin: 0
    height: 100%
    font-size: .15rem
  .main >>> .vux-cell-box:not(:first-child):before
    border: 0
  .main >>> .weui-cell_access
    padding: 0
    line-height: .36rem

  .main
    display: flex
    flex-direction: column
    margin: .1rem 0 .3rem 0
    .list
      display: flex
      height: .4rem
      line-height: .36rem
      font-size: .15rem
      .title
        width: .8rem
        color: #626262
      .detail
        width: 3rem
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
        color: #999
</style>

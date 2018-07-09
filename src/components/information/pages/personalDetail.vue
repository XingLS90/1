<template>
  <div class="personalDetail">
    <div class="information">
      <p class="nav">预约人信息</p>
      <div class="list border-bottom">
        <p class="title">姓名</p>
        <input type="text" value="" ref="name" @change="handleVerifyName" @click="handlefalseName" />
      </div>
      <div class="list border-bottom">
        <p class="title">电话</p>
        <input type="text" value="" ref="phone" @change="handleVerifyPhone" @click="handlefalsePhone" />
      </div>
      <div class="list border-bottom">
        <p class="title">验证码</p>
        <input type="text" value="" ref="code" @click="handlefalseCode" />
        <span class="code border-left" @click="handleCodeMsg">获取验证码</span>
      </div>
    </div>
    <div class="time">
      <p class="nav">预约时间</p>
      <div class="list border-bottom">
        <p class="title">预约日期</p>
        <group>
          <calendar v-model="demo2" title="" disable-past placeholder="选择时间" ref="data"></calendar>
        </group>
        <input type="text" :value="time" @click="handleDayTime">
      </div>
    </div>
    <div class="explain">我们会在您所选择日期的当天安排工程师上门，请您届时家中留人，并保持电话畅通。</div>
    <p class="next" @click="handleSubmitMsg">
      <img src="../../../assets/images/next.png">
    </p>
  </div>
</template>

<script>
import { Group, Calendar } from 'vux'
import axios from 'axios'

export default {
  name: 'PersonalDetail',
  components: {
    Group,
    Calendar
  },
  data () {
    return {
      readonly: false,
      demo2: '',
      time: '上午'
    }
  },
  methods: {
    handleVerifyName () {
      let nameReg = /^([\u4e00-\u9fa5]{2,4})$/
      let name = this.$refs.name.value
      if (!nameReg.test(name)) {
        this.$refs.name.value = '请输入正确的名字'
        this.$refs.name.style = 'color: red'
      } else {
        this.$store.commit('name', name)
      }
    },
    handlefalseName () {
      if (this.$refs.name.value === '请输入正确的名字') {
        this.$refs.name.value = ''
        this.$refs.name.style = 'color: #999'
      }
    },

    handleVerifyPhone () {
      let phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
      let phone = this.$refs.phone.value
      if (!phoneReg.test(phone)) {
        this.$refs.phone.value = '请输入正确的手机号'
        this.$refs.phone.style = 'color: red'
      } else {
        this.$store.commit('phone', phone)
      }
    },
    handlefalsePhone () {
      if (this.$refs.phone.value === '请输入正确的手机号') {
        this.$refs.phone.value = ''
        this.$refs.phone.style = 'color: #999'
      }
    },
    handlefalseCode () {
      if (this.$refs.code.value === '验证码错误') {
        this.$refs.code.value = ''
        this.$refs.code.style = 'color: #999'
      }
    },
    handleCodeMsg () {
      if (this.$refs.phone.value) {
        let url = '/sendsms'
        var params = new URLSearchParams()
        axios.post(url,{params})
          .then(function(res){
              console.log(res);
          })
          .catch(function(err){
              console.log(err);
          })
      }
    },
    handleDayTime () {
      if (this.$refs.data.value) {
        this.time === '上午' ? this.time = '下午' : this.time = '上午'
      }
      let value = this.$refs.data.value + ' ' + this.time
      this.$store.commit('appointmentDate', value)
    },
    handleSubmitMsg () {
      let this_ = this
      let url = 'http://localhost:8080/api?/wifi/export'
      axios(url, {
        'phone': this_.$store.state.phone
      })
      .then(function (res) {
        console.log(res)
      })
      /*axios(url, {
        data: {
          'product': this_.$store.state.product,
          'address': this_.$store.state.address,
          'specificaddress': this_.$store.state.specificaddress,
          'name': this_.$store.state.name,
          'phone': this_.$store.state.phone,
          'ordertime': this_.$store.state.ordertime,
          'service': this_.$store.state.service
        }
      })
        .then(function (response) {
          console.log(response.config)
          if (response.status_code === 5002) {
            this_.$refs.code.value = '验证码错误'
            this_.$refs.code.style = 'color: red'
          } else {
            this_.$router.push('/successful')
          }
        })
        .catch(function (error) {
          console.log(error)
        })*/
    }
  }
}
</script>

<style scoped lang="stylus">
  .personalDetail >>> .weui-cell
    padding: 0
  .personalDetail >>> .weui-cell_access .weui-cell__ft:after
    border: 0
  .personalDetail >>>.weui-cells
    line-height: .4rem
    margin: 0
  .personalDetail
    display: flex
    flex-direction: column
    .nav
      margin-bottom: .2rem
      color: #888
    .information
      .list
        display: flex
        width: 100%
        height: .41rem
        line-height: .4rem
        .title
          width: .8rem
          font-size: .15rem
          color: #626262
        input
          width: 1.5rem
          font-size: 0.16rem
          color: #999
        .code
          width: 1rem
          height: .25rem
          line-height: .25rem
          margin-top: .1rem
          font-size: .15rem
          color: #3B99FC
          text-align: center
    .time
      margin-top: .44rem
      .list
        display: flex
        justify-content: space-around
        height: .41rem
        line-height: .4rem
        .title
          width: .8rem
          font-size: .15rem
          color: #626262
        input
          width: 1.5rem
          font-size: 0.16rem
          text-align: right
          color: #999
    .explain
      font-size: .12rem
      margin-top: .4rem
      line-height: .14rem
      color: #999
    .next
      position: absolute
      top: 5.76rem
      left: .48rem
      width: 2.8rem
      height: .4rem
      img
        width: 100%
</style>

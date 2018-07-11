<template>
  <div class="personalDetail">
    <div class="information">
      <p class="nav">预约人信息</p>
      <div class="list border-bottom">
        <p class="title">姓名</p>
        <input type="text" value="" maxlength="20" ref="name" @change="handleVerifyName" />
      </div>
      <div class="list border-bottom">
        <p class="title">电话</p>
        <input type="text" value="" ref="phone" @change="handleVerifyPhone" />
      </div>
      <div class="list border-bottom">
        <p class="title">验证码</p>
        <input type="text" value="" ref="code" @change="handleVerifyCode" />
        <button
          class="code border-left"
          @click="handleCodeMsg"
          :class="{back: isBack}"
          ref="send"
          >{{send}}</button>
      </div>
    </div>
    <div class="time">
      <p class="nav">预约时间</p>
      <div class="list border-bottom">
        <p class="title">预约日期</p>
        <group>
          <calendar  @on-change="handleAm" v-model="demo2" title="" disable-past placeholder="选择时间" ref="data" ></calendar>
        </group>
        <button class="am" ref="am" type="text" disabled=false @click="handleDayTime" >{{time}}</button>
      </div>
    </div>
    <div class="explain">我们会在您所选择日期的当天安排工程师上门，请您届时家中留人，并保持电话畅通。</div>
    <p class="next" @click="handleSubmitMsg">
      <img src="../../../assets/images/sub.png">
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
      time: '上午',
      send: '获取验证码',
      isBack: false
    }
  },
  methods: {
    handleVerifyName () {
      let this_ = this
      let nameReg = /^([\u4e00-\u9fa5]{2,4})$/
      let name = this.$refs.name.value
      if (!nameReg.test(name)) {
        this.$refs.name.value = '请输入正确的名字'
        this.$refs.name.style = 'color: red'
        setTimeout(function () {
          this_.$refs.name.value = ''
          this_.$refs.name.style = 'color: #999'
        }, 1500)
      } else {
        this.$store.commit('name', name)
      }
    },
    handleVerifyPhone () {
      let this_ = this
      let phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
      let phone = this.$refs.phone.value
      if (!phoneReg.test(phone)) {
        this.$refs.phone.value = '请输入正确的手机号'
        this.$refs.phone.style = 'color: red'
        setTimeout(function () {
          this_.$refs.phone.value = ''
          this_.$refs.phone.style = 'color: #999'
        }, 1500)
      } else {
        this.$store.commit('phone', phone)
      }
    },
    handleVerifyCode () {
      let this_ = this
      let codeReg = /^\d{6}$/
      let code = this.$refs.code.value
      if (!codeReg.test(code)) {
        this.$refs.code.value = '验证码错误'
        this.$refs.code.style = 'color: red'
        setTimeout(function () {
          this_.$refs.code.value = ''
          this_.$refs.code.style = 'color: #999'
        }, 1500)
      }
      this.$store.commit('code', code)
    },
    // 获取验证码
    handleCodeMsg () {
      if (this.$refs.phone.value) {
        this.$refs.send.disabled = true
        let n = 60
        let timer = setInterval(() => {
          this.isBack = true
          this.send = n-- + 's'
          if (n === -1) {
            clearInterval(timer)
            this.isBack = false
            this.$refs.send.disabled = false
            this.send = '发送验证码'
          }
        }, 1000)
        let url = 'http://lwechat.lenovo.com.cn/wifi/sendsms'
        axios({
          method: 'POST',
          url: url,
          data: {
            'phone': this.$store.state.phone
          }
        })
          .then(function (res) {
          })
      }
    },
    handleAm () {
      this.$refs.am.disabled = false
    },
    handleDayTime () {
      this.time === '上午' ? this.time = '下午' : this.time = '上午'
    },
    // 提交数据
    handleSubmitMsg () {
      let value = this.$refs.data.value + ' ' + this.time
      this.$store.commit('appointmentDate', value)
      let this_ = this
      let url = 'http://lwechat.lenovo.com.cn/wifi/subscribeAdd'
      axios({
        method: 'POST',
        url: url,
        data: {
          'product': this_.$store.state.product,
          'address': this_.$store.state.address,
          'specificaddress': this_.$store.state.specificaddress,
          'name': this_.$store.state.name,
          'phone': this_.$store.state.phone,
          'ordertime': this_.$store.state.ordertime,
          'code': this_.$store.state.code,
          'service1': this_.$store.state.service1,
          'service2': this_.$store.state.service2,
          'service3': this_.$store.state.service3,
          'other': this_.$store.state.other
        }
      })
        .then(function (response) {
          if (response.data.status_code === '5002') {
            this_.$refs.code.value = '验证码错误'
            this_.$refs.code.style = 'color: red'
          } else {
            this_.$router.push('/successful')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="stylus">
  .personalDetail >>> .weui-cell
    padding: 0
  .personalDetail >>> .weui-cell_access .weui-cell__ft:after
    border: 0
  .personalDetail >>> .weui-cells
    line-height: .4rem
    margin: 0
  .personalDetail >>> .weui-cells:before
    border: 0
  .personalDetail >>> .weui-cells:after
    border: 0
  .personalDetail >>> .vux-calendar:before
    border: 0
  .personalDetail
    display: flex
    flex-direction: column
    .nav
      margin-bottom: .2rem
      color: #888
    .information
      .list
        position:relative
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
          width: 1.13rem
          height: .4rem
          line-height: .4rem
          font-size: .15rem
          color: #3B99FC
          text-align: center
          background: #fff
        .back
          background: #999
          color: #fff
    .time
      margin-top: .44rem
      .list
        display: flex
        justify-content: space-between
        height: .41rem
        line-height: .4rem
        .title
          width: .8rem
          font-size: .15rem
          color: #626262
        .am
          width: 1rem
          font-size: .16rem
          color: #999
          background: #fff
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

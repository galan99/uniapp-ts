<template>
  <view class="content">
    <text class="title"> {{ title }}</text>
    <item :list="list" :name="'子组件'"/>
    <button @click="handleClik">列表页</button>
    <input type="text" v-model="tel" placeholder="请输入手机号" maxlength="11">
    <button @click="handleTel">验证手机号</button>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { timeFormat } from '@/utils/index'
import item from './item.vue'

@Component({
  components: {
    item
  }
})
export default class Home extends Vue {
  tel:string = ''
  title = 'Hello app'

  list = [
    { name: 'one text', id: 1 },
    { name: 'two text', id: 2 },
    { name: 'three text', id: 3 },
    { name: 'four text', id: 4 }
  ]

  @Watch('title')
  changeTitle(val: string, oldVal: string):void {
    console.log(val)
  }

  onLoad() {
    console.log('The page is on load success')
    console.log(`timeFormat: ${timeFormat('1602315918', 'Y-M-D')}`)
    console.log(`process: ${process.env.NODE_ENV}`)
  }

  handleClik():void {
    // uni.navigateTo({
    //   url: '/pages/list/index'
    // })
    this.title = 'change title'
  }

  handleTel() {
    console.log(this.$checkTel(this.tel))
  }
}
</script>

<style scoped lang="scss">
.content {
  text-align: center;
  .title {
    display: block;
    margin-bottom: 30rpx;
    font-size: 40rpx;
    font-weight: bold;
  }
}
</style>

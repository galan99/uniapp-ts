<template>
  <view class="content">
    <text class="title"> {{ title }}</text>
    <item :list="list"/>
    <view class="name" @click="handleClik">list页面</view>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import item from './item.vue'

@Component({
  components: {
    item
  }
})
export default class Home extends Vue {
  title = 'Hello app'

  list = [
    { name: 'one text', id: 1 },
    { name: 'two text', id: 2 },
    { name: 'three text', id: 3 },
    { name: 'four text', id: 4 }
  ]

  onLoad() {
    console.log('The page is on load success')
  }
  handleClik() {
    uni.navigateTo({
      url: '/pages/list/index'
    })
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

<template>
  <view class="content">
    <image class="logo" src="@/static/logo.png" />
    <view>
      <text class="title"> {{ title }}</text>
    </view>
    <view class="name" @click="handleClik">list页面</view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
    console.log('334')
  },
  methods: {
    handleClik() {
      console.log('click')
    }
  }
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

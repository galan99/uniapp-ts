<template>
  <view>
    <view class="item" v-for="item in list" :key="item.id">
      {{item.name}}
    </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    list: Array
  }
})
export default class Home extends Vue {
  title = 'Hello22'

  created() {
    console.log('components：item')
  }
}
</script>

<style scoped lang="scss">
.item{
  line-height: 30rpx;
  margin-bottom: 20rpx;
}
</style>


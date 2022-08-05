<template>
  <view class="container">
    <uni-grid :column="3" :square="false" :highlight="false" @change="gridItemClick">
      <uni-grid-item v-for="(item, index) in applicationList" :index="index" :key="index">
        <view class="grid-item-box">
          <image :src="item.url" class="image" mode="aspectFill" />
          <text class="text">{{ item.text }}</text>
        </view>
      </uni-grid-item>
    </uni-grid>
  </view>
</template>

<script setup lang="ts">
const applicationList = [{
  url: '/pages/crmupload/index',
  text: 'CRM数据上传',
}];
const gridItemClick = (e: { detail: { index: number; }; }) => {
  const { index } = e.detail;
  uni.navigateTo({
    url: applicationList[index].url
  });
}
</script>

<style>
</style>

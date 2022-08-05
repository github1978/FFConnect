<template>
    <view class="container">
        <button @click="filePickerSystem">选择文件</button>
    </view>
</template>

<script setup lang="ts">
function filePickerSystem() {
    uni.filePicker({
        maxNum: 10,
        pickerTitle: "Select a file",
        pickerConfirm: "Confirm",
        isSystem: false,
        success(res: any) {
            console.log(JSON.stringify(res));
        },
        fail(res: any) {
            console.log(`filePicker fail: ${JSON.stringify(res)}`);
        },
    });
}
</script>

<style>
</style>
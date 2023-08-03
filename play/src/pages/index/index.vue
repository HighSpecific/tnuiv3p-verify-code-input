<script setup lang="ts">
import { ref } from 'vue'
import TnPopup from '@tuniao/tnui-vue3-uniapp/components/popup/src/popup.vue'
import TnVerifyCodeInput from '../../packages/src/index.vue'

const message = ref<string>('欢迎开发TuniaoUI v3 uniapp 插件')

const codeInput = ref<string>('')

const openPopup = ref<boolean>(false)
const showPopup = () => {
  openPopup.value = true
}
</script>

<template>
  <TnPopup v-model="openPopup" open-direction="center" width="90%">
    <view class="popup-verify-input">
      <TnVerifyCodeInput :length="6" :focus="openPopup" />
    </view>
  </TnPopup>
  <view @tap.stop="showPopup">打开弹框</view>
  <view class="content">
    <view class="message">{{ message }}</view>
    {{ codeInput }}
    <view class="demo">
      <TnVerifyCodeInput v-model="codeInput" />
    </view>
    <view class="demo">
      <TnVerifyCodeInput v-model="codeInput" disabled />
    </view>
    <view class="demo">
      <TnVerifyCodeInput password />
    </view>
    <view class="demo">
      <TnVerifyCodeInput width="100" password />
    </view>
    <view class="demo">
      <TnVerifyCodeInput :length="6" />
    </view>
    <view class="demo">
      <TnVerifyCodeInput
        v-model="codeInput"
        inactive-color="tn-grey-disabled"
        active-color="tn-type-danger"
      />
    </view>
    <view class="demo">
      <TnVerifyCodeInput v-model="codeInput" input-type="border-vline" />
    </view>
    <view class="demo">
      <TnVerifyCodeInput v-model="codeInput" input-type="border-hline" />
    </view>
    <view class="demo">
      <TnVerifyCodeInput v-model="codeInput" input-type="middle-hline" />
    </view>
    <view class="demo">
      <TnVerifyCodeInput v-model="codeInput" input-type="bottom-hline" />
    </view>
    <view class="demo">
      <TnVerifyCodeInput v-model="codeInput" input-type="middle-vline" />
    </view>

    <view class="demo">
      <TnVerifyCodeInput v-model="codeInput" width="120" />
    </view>
    <view class="demo">
      <TnVerifyCodeInput
        v-model="codeInput"
        input-type="border-vline"
        width="120"
      />
    </view>
    <view class="demo">
      <TnVerifyCodeInput
        v-model="codeInput"
        input-type="border-hline"
        width="120"
      />
    </view>
    <view class="demo">
      <TnVerifyCodeInput
        v-model="codeInput"
        input-type="middle-hline"
        width="120"
      />
    </view>
    <view class="demo">
      <TnVerifyCodeInput
        v-model="codeInput"
        input-type="bottom-hline"
        width="120"
      />
    </view>
    <view class="demo">
      <TnVerifyCodeInput
        v-model="codeInput"
        input-type="middle-vline"
        width="120"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .message {
    font-size: 50rpx;
  }

  .demo {
    margin-top: 50rpx;
  }
}

.popup-verify-input {
  position: relative;
  width: 100%;
  padding: 30rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

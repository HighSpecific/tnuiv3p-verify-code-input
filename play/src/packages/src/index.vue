<script lang="ts" setup>
import { verifyCodeInputEmits, verifyCodeInputProps } from './types'
import {
  useVerifyCodeInput,
  useVerifyCodeInputCustomStyle,
} from './composables'

const props = defineProps(verifyCodeInputProps)
const emits = defineEmits(verifyCodeInputEmits)

const { ns, colorClass, colorStyle, inputItemStyle, passwordDotStyle } =
  useVerifyCodeInputCustomStyle(props)
const {
  inputValue,
  codeValue,
  activeIndex,
  disabled,
  inputInputHandle,
  inputChangeHandle,
} = useVerifyCodeInput(props, emits)
</script>

<template>
  <view :class="[ns.b()]">
    <!-- 真实输入框 -->
    <input
      v-model="inputValue"
      type="number"
      :disabled="disabled"
      :focus="focus"
      :class="[ns.e('input')]"
      @input="inputInputHandle"
      @change="inputChangeHandle"
    />

    <!-- 验证码输入框 -->
    <view :class="[ns.e('code-input')]">
      <view
        v-for="(item, index) in codeValue"
        :key="index"
        :class="[ns.e('code-input-item')]"
        :style="inputItemStyle"
      >
        <view :class="[ns.em('code-input-item', 'wrapper')]">
          <view :class="[ns.em('code-input-item', 'container')]">
            <!-- 信息提示框 start -->
            <!-- 根据不同的输入框类型显示不同的样式 -->
            <!-- border -->
            <view
              v-if="inputType.startsWith('border')"
              class="border"
              :class="[
                colorClass('border', index === activeIndex || item !== ''),
                ns.is(
                  'breath',
                  breath && inputType === 'border' && index === activeIndex
                ),
              ]"
              :style="
                colorStyle('border', index === activeIndex || item !== '')
              "
            >
              <view
                v-if="inputType === 'border-vline' && index === activeIndex"
                class="border-vline"
                :class="[colorClass('bg', true), ns.is('breath', breath)]"
                :style="colorStyle('bg', true)"
              />
              <view
                v-if="inputType === 'border-hline' && index === activeIndex"
                class="border-hline"
                :class="[colorClass('bg', true), ns.is('breath', breath)]"
                :style="colorStyle('bg', true)"
              />
            </view>
            <!-- 居中水平 -->
            <view
              v-if="inputType === 'middle-hline' && item === ''"
              class="middle-hline"
              :class="[
                colorClass('bg', index === activeIndex),
                ns.is('breath', breath && index === activeIndex),
              ]"
              :style="colorStyle('bg', index === activeIndex)"
            />
            <!-- 底部水平 -->
            <view
              v-if="inputType === 'bottom-hline' && item === ''"
              class="bottom-hline"
              :class="[
                colorClass('bg', index === activeIndex),
                ns.is('breath', breath && index === activeIndex),
              ]"
              :style="colorStyle('bg', index === activeIndex)"
            />
            <!-- 居中垂直 -->
            <view
              v-if="inputType === 'middle-vline' && item === ''"
              class="middle-vline"
              :class="[
                colorClass('bg', index === activeIndex),
                ns.is('breath', breath && index === activeIndex),
              ]"
              :style="colorStyle('bg', index === activeIndex)"
            />
            <!-- 信息提示框 end -->

            <!-- 验证码值展示 -->
            <view
              v-if="item !== ''"
              class="code-value"
              :class="[colorClass('text', true), ns.is('dot', password)]"
              :style="{ ...colorStyle('text', true), ...passwordDotStyle }"
            >
              {{ password ? '' : item }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './theme-chalk/index.scss';
</style>

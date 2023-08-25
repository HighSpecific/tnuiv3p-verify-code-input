# 图鸟 UI vue3 uniapp Plugins - 验证码输入框

![TuniaoUI vue3 uniapp](https://resource.tuniaokj.com/images/vue3/market/vue3-banner-min.jpg 'TuniaoUI vue3 uniapp')

[Tuniao UI vue3官方仓库](https://github.com/tuniaoTech/tuniaoui-rc-vue3-uniapp)

该组件一般用于验证码的输入提示

## 组件安装

```bash
npm i tnuiv3p-tn-verify-code-input
```

## 组件位置

```bash
tnuiv3p-tn-verify-code-input/index.vue
```

## 平台差异说明

| App(vue) | H5  | 微信小程序 | 支付宝小程序 |  ...   |
| :------: | :-: | :--------: | :----------: | :----: |
|    √     |  √  |     √      |      √       | 适配中 |

## 基础使用

- 通过`v-model`绑定验证码的值
- 通过`length`控制验证码的长度，默认值为`4`

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import TnVerifyCodeInput from 'tnuiv3p-tn-verify-code-input/index.vue'

const codeInput = ref<string>('')
</script>

<template>
  <TnVerifyCodeInput v-model="codeInput" />
</template>
```

#### 设置长度为6的验证码

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import TnVerifyCodeInput from 'tnuiv3p-tn-verify-code-input/index.vue'

const codeInput = ref<string>('')
</script>

<template>
  <TnVerifyCodeInput v-model="codeInput" :length="6" />
</template>
```

## 验证码提示框类型

### 边框提示框 - border (默认)

将`input-type`设置为`border`即可设置边框提示框

此时的提示框显示为一个边框，如果设置了`breath`为`true`边框在当前选中时会有呼吸灯的效果，通过`inactive-color`设置边框默认的颜色，通过`active-color`设置边框当前选中时的颜色

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import TnVerifyCodeInput from 'tnuiv3p-tn-verify-code-input/index.vue'

const codeInput = ref<string>('')
</script>

<template>
  <TnVerifyCodeInput v-model="codeInput" input-type="border" />
</template>
```

### 边框带垂直竖线 - border-vline

将`input-type`设置为`border-vline`即可设置边框带垂直竖线

此时的提示框显示为一个边框且中间有一个垂直的竖线，如果设置了`breath`为`true`时垂直的竖线显示为呼吸灯的效果，通过`inactive-color`设置边框和垂直竖线默认的颜色，通过`active-color`设置边框和垂直竖线当前选中时的颜色

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import TnVerifyCodeInput from 'tnuiv3p-tn-verify-code-input/index.vue'

const codeInput = ref<string>('')
</script>

<template>
  <TnVerifyCodeInput v-model="codeInput" input-type="border-vline" />
</template>
```

### 边框带居中横线 - border-hline

将`input-type`设置为`border-hline`即可设置边框带居中横线

此时的提示框显示为一个边框且中间有一个居中的横线，如果设置了`breath`为`true`时居中的横线显示为呼吸灯的效果，通过`inactive-color`设置边框和居中横线默认的颜色，通过`active-color`设置边框和居中横线当前选中时的颜色

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import TnVerifyCodeInput from 'tnuiv3p-tn-verify-code-input/index.vue'

const codeInput = ref<string>('')
</script>

<template>
  <TnVerifyCodeInput v-model="codeInput" input-type="border-hline" />
</template>
```

### 垂直居中竖线 - middle-vline

将`input-type`设置为`middle-vline`即可设置垂直居中竖线

此时的提示区域显示一条垂直居中的竖线，如果设置了`breath`为`true`时竖线显示为呼吸灯的效果，通过`inactive-color`设置竖线的默认颜色，通过`active-color`设置竖线选中时的颜色

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import TnVerifyCodeInput from 'tnuiv3p-tn-verify-code-input/index.vue'

const codeInput = ref<string>('')
</script>

<template>
  <TnVerifyCodeInput v-model="codeInput" input-type="middle-vline" />
</template>
```

### 居中横线 - middle-hline

将`input-type`设置为`middle-hline`即可设置居中的横线

此时的提示区域显示一条居中的横线，如果设置了`breath`为`true`时横线显示为呼吸灯的效果，通过`inactive-color`设置横线的默认颜色，通过`active-color`设置横线选中时的颜色

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import TnVerifyCodeInput from 'tnuiv3p-tn-verify-code-input/index.vue'

const codeInput = ref<string>('')
</script>

<template>
  <TnVerifyCodeInput v-model="codeInput" input-type="middle-hline" />
</template>
```

### 底部横线 - bottom-hline

将`input-type`设置为`bottom-hline`即可设置底部的横线

此时的提示区域显示一条底部的横线，如果设置了`breath`为`true`时横线显示为呼吸灯的效果，通过`inactive-color`设置横线的默认颜色，通过`active-color`设置横线选中时的颜色

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import TnVerifyCodeInput from 'tnuiv3p-tn-verify-code-input/index.vue'

const codeInput = ref<string>('')
</script>

<template>
  <TnVerifyCodeInput v-model="codeInput" input-type="bottom-hline" />
</template>
```

## API

### Props

| 属性名                | 说明                                                         | 类型             | 默认值   | 可选值                                                       |
| --------------------- | ------------------------------------------------------------ | ---------------- | -------- | ------------------------------------------------------------ |
| v-model / model-value | 验证码的值                                                   | String \| Number | -        | -                                                            |
| length                | 验证码的长度                                                 | Number           | 4        | -                                                            |
| width                 | 每一个验证码输入框的宽度，默认单位为`rpx`                    | String           | -        | -                                                            |
| focus                 | 是否自动聚焦到当前验证码输入框                               | Boolean          | `true`   | `false`                                                      |
| disabled              | 禁用验证码输入框                                             | Boolean          | `false`  | `true`                                                       |
| breath                | 当前验证码输入框激活时是否显示呼吸灯效果，具体每一个类型对应的说明详细请看上面说明 | Boolean          | `true`   | `false`                                                      |
| password              | 密码输入                                                     | Boolean          | `false`  | `true`                                                       |
| input-type            | 验证码输入框的类型                                           | String           | `border` | `border-vline` \ `border-hline` \ `middle-hline` \ `middle-vline` \ `bottom-hline` |
| inactive-color        | 默认显示提示框的颜色                                         | String           | -        | -                                                            |
| active-color          | 激活时提示框显示的颜色                                       | String           | -        | -                                                            |
| validate-event        | 输入时是否触发表单验证                                       | Boolean          | `true`   | `false`                                                      |



### Emits

| 事件名   | 说明                 | 类型                                |
| -------- | -------------------- | ----------------------------------- |
| input    | 验证码输入时触发     | `(value: string \| number) => void` |
| change   | 验证码发送改变时触发 | `(value: string \|number) => void`  |
| complete | 验证码输入完成时触发 | `() => void`                        |

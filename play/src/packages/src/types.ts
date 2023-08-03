import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@tuniao/tnui-vue3-uniapp/constants'
import { buildProps, isNumber, isString } from '@tuniao/tnui-vue3-uniapp/utils'

import type { ExtractPropTypes } from 'vue'

export const verifyCodeInputType = [
  'border',
  'border-vline',
  'border-hline',
  'middle-vline',
  'middle-hline',
  'bottom-hline',
]
export type VerifyCodeInputType = (typeof verifyCodeInputType)[number]

export const verifyCodeInputProps = buildProps({
  /**
   * @description 验证码的值
   */
  modelValue: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description 验证码的长度
   */
  length: {
    type: Number,
    default: 4,
  },
  /**
   * @description 每一个验证码输入框的宽度
   */
  width: String,
  /**
   * @description 聚焦验证码输入框
   */
  focus: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 禁止输入
   */
  disabled: Boolean,
  /**
   * @description 隐藏输入内容
   */
  password: Boolean,
  /**
   * @description 当前激活的验证码输入框是否带呼吸效果
   */
  breath: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 验证码输入框类型
   */
  inputType: {
    type: String,
    values: verifyCodeInputType,
    default: 'border',
  },
  /**
   * @description 未选中时的颜色，以tn开头使用图鸟内置的颜色
   */
  inactiveColor: String,
  /**
   * @description 选中时的颜色，以tn开头使用图鸟内置的颜色
   */
  activeColor: String,
  /**
   * @description 输入时是否触发表单验证
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
})

export const verifyCodeInputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string | number) =>
    isString(value) || isNumber(value),
  /**
   * @description 验证码输入事件
   */
  [INPUT_EVENT]: (value: string | number) => isString(value) || isNumber(value),
  /**
   * @description 验证码发生改变事件
   */
  [CHANGE_EVENT]: (value: string | number) =>
    isString(value) || isNumber(value),
  /**
   * @description 验证码输入完成事件
   */
  complete: () => true,
}

export type VerifyCodeInputProps = ExtractPropTypes<typeof verifyCodeInputProps>
export type VerifyCodeInputEmits = typeof verifyCodeInputEmits

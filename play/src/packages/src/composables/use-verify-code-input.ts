import { computed, nextTick, ref, watch } from 'vue'
import {
  useFormDisabled,
  useFormItem,
} from '@tuniao/tnui-vue3-uniapp/components/form'
import { debugWarn } from '@tuniao/tnui-vue3-uniapp/utils'

import type { SetupContext } from 'vue'
import type { VerifyCodeInputEmits, VerifyCodeInputProps } from '../types'

export const useVerifyCodeInput = (
  props: VerifyCodeInputProps,
  emits: SetupContext<VerifyCodeInputEmits>['emit']
) => {
  const { formItem } = useFormItem()

  // 记录用户输入的值
  const inputValue = ref<string>('')
  // 验证码的值
  const codeValue = computed<string[]>(() =>
    Array.from({ length: props.length }).map(
      (_, i) => inputValue.value?.[i] ?? ''
    )
  )
  // 当前激活的输入框索引
  const activeIndex = computed<number>(() => inputValue.value.length)
  watch(
    () => props.modelValue,
    (val) => {
      inputValue.value = String(val ?? '')
    },
    {
      immediate: true,
    }
  )

  // 禁止输入事件
  const disabled = useFormDisabled(
    props.disabled || inputValue.value.length >= props.length
  )

  // 输入框输入的值发生改变
  const inputInputHandle = (e: any) => {
    const {
      detail: { value },
    } = e
    const tempValue = (value as string).slice(0, props.length)
    if (value.length > props.length) {
      nextTick(() => {
        inputValue.value = tempValue
      })
    }
    if (tempValue.length === props.length) {
      emits('complete')
    }

    emits('update:modelValue', tempValue)

    emits('input', tempValue)

    if (props.validateEvent) {
      formItem?.validate?.('input').catch((err) => {
        debugWarn(err)
      })
    }
  }
  const inputChangeHandle = () => {
    emits('change', inputValue.value)
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => {
        debugWarn(err)
      })
    }
  }

  return {
    inputValue,
    codeValue,
    activeIndex,
    disabled,
    inputInputHandle,
    inputChangeHandle,
  }
}

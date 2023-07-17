import { computed } from 'vue'
import { useComponentColor, useNamespace } from '@tuniao/tnui-vue3-uniapp/hooks'
import { formatDomSizeValue } from '@tuniao/tnui-vue3-uniapp/utils'

import type { CSSProperties } from 'vue'
import type { VerifyCodeInputProps } from '../types'

type ColorType = 'text' | 'bg' | 'border'
type ColorClass = (type: ColorType, active: boolean) => string
type ColorStyle = (type: ColorType, active: boolean) => CSSProperties

export const useVerifyCodeInputCustomStyle = (props: VerifyCodeInputProps) => {
  const ns = useNamespace('verify-code-input')

  // 解析颜色
  const inactiveColor = computed(() => props?.inactiveColor || '')
  const activeColor = computed(() => props?.activeColor || '')
  const [textColorClass, textColorStyle] = useComponentColor(
    inactiveColor,
    'text'
  )
  const [bgColorClass, bgColorStyle] = useComponentColor(inactiveColor, 'bg')
  const [borderColorClass, borderColorStyle] = useComponentColor(
    inactiveColor,
    'border'
  )
  const [activeTextColorClass, activeTextColorStyle] = useComponentColor(
    activeColor,
    'text'
  )
  const [activeBgColorClass, activeBgColorStyle] = useComponentColor(
    activeColor,
    'bg'
  )
  const [activeBorderColorClass, activeBorderColorStyle] = useComponentColor(
    activeColor,
    'border'
  )

  // 获取对应颜色的类
  const colorClass = computed<ColorClass>(() => {
    return (type, active) => {
      const cls: string[] = []

      switch (type) {
        case 'text':
          if (active) {
            cls.push(activeTextColorClass.value)
          } else {
            cls.push(textColorClass.value)
          }
          break
        case 'bg':
          if (active) {
            cls.push(activeBgColorClass.value)
          } else {
            cls.push(bgColorClass.value)
          }
          break
        case 'border':
          if (active) {
            cls.push(activeBorderColorClass.value)
          } else {
            cls.push(borderColorClass.value)
          }
          break
      }

      return cls.join('')
    }
  })
  const colorStyle = computed<ColorStyle>(() => {
    return (type, active) => {
      const style: CSSProperties = {}

      switch (type) {
        case 'text':
          if (active) {
            if (!activeTextColorClass.value) {
              style.color =
                activeTextColorStyle.value || 'var(--tn-color-primary)'
            }
          } else {
            if (!textColorClass.value) {
              style.color =
                textColorStyle.value || 'var(--tn-color-gray-disabled)'
            }
          }
          break
        case 'bg':
          if (active) {
            if (!activeBgColorClass.value) {
              style.backgroundColor =
                activeBgColorStyle.value || 'var(--tn-color-primary)'
            }
          } else {
            if (!bgColorClass.value) {
              style.backgroundColor =
                bgColorStyle.value || 'var(--tn-color-gray-disabled)'
            }
          }
          break
        case 'border':
          if (active) {
            if (!activeBorderColorClass.value) {
              style.borderColor =
                activeBorderColorStyle.value || 'var(--tn-color-primary)'
            }
          } else {
            if (!borderColorClass.value) {
              style.borderColor =
                borderColorStyle.value || 'var(--tn-color-gray-disabled)'
            }
          }
          break
      }

      return style
    }
  })

  // 每一个验证码输入框的样式
  const inputItemStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (props?.width) {
      style.width = formatDomSizeValue(props.width)
      style.fontSize = `calc(${style.width} * 0.6)`
    }

    return style
  })

  return {
    ns,
    colorClass,
    colorStyle,
    inputItemStyle,
  }
}

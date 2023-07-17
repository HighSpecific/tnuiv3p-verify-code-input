import { withNoopInstall } from '@tuniao/tnui-vue3-uniapp/utils'
import VerifyCodeInput from './index.vue'

export const TnVerifyCodeInput = withNoopInstall(VerifyCodeInput)
export default TnVerifyCodeInput

export * from './types'

export type { TnVerifyCodeInputInstance } from './instance'

import * as veeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import { localize } from '@vee-validate/i18n'
import yup from './yup'

/** 定义语言 */
veeValidate.configure({
	// validateOnInput: true, // 全局开启输入验证
	generateMessage: localize('zh_CN', zh_CN),
})
// 使用cdn中文包
// import { loadLocaleFromURL } from '@vee-validate/i18n'
// loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json')

/** 批量自动注册规则 */
Object.keys(rules).forEach((key) => {
	veeValidate.defineRule(key, rules[key])
})

const modules = { yup, ...veeValidate }

export default modules

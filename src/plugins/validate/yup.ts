import * as yup from 'yup'

/** 添加yup的中文提示 */
yup.setLocale({
	mixed: {
		required: '${label}必须输入',
	},
	string: {
		email: '邮箱格式错误',
	},
})

export default yup

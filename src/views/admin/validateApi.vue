<script setup lang="ts">
/**
 * 使用API的形式校验
 */
import { Form, defineRule, configure, useField, useForm } from 'vee-validate'
import { required, min, max, confirmed, email } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import * as yup from 'yup'

defineRule('email', email)
defineRule('required', required)

configure({
	generateMessage: localize('zh_CN', zh_CN),
})

const { handleSubmit, errors } = useForm({
	initialValues: {
		username: 'Trwite',
	},
	validationSchema: {
		// username: { required: true, email: true },
		username: yup.string().required('用户名不能为空').email('邮箱格式错误'),
	},
})

const { errorMessage: usernameError, value: usernameValue } = useField(
	'username',
	{},
	{
		label: '用户名',
	}
)

const onSubmit = handleSubmit((values) => {
	console.log(values)
	alert('验证通过')
})
</script>

<template>
	<Form @submit="onSubmit">
		<input type="text" v-model="usernameValue" class="!w-1/2 h-14" />
		<p>{{ usernameError }}</p>
		<p>{{ errors.username }}</p>
		<button>提交表单</button>
	</Form>
</template>

<style lang="scss">
div,
form {
	@apply flex w-screen h-screen justify-center items-center bg-gray-200 flex-col;
	input {
		@apply border-4 p-2 rounded-md border-violet-500 outline-none;
	}
	button {
		@apply border bg-gray-600 px-4 rounded-md text-white;
	}
}
</style>

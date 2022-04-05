<script setup lang="ts">
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { ref } from 'vue'
import TwButton from '@/components/form/tw-button.vue'
import { required, min, max, confirmed, email } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'

// 邮箱验证
// const emailRule = (value): boolean | string => {
// 	return /@/.test(value) ? true : '邮箱格式错误'
// }

defineRule('email', email)
defineRule('required', required)

configure({
	generateMessage: localize('zh_CN', zh_CN),
})

const onSubmit = (values) => {
	console.log(values)
	alert('验证通过')
}
</script>

<template>
	<Form class="bg-gray-600 h-screen flex justify-center items-center flex-col" @submit="onSubmit">
		<Field
			name="account"
			label="账号"
			:rules="{ required: true, email: true }"
			:validate-on-input="true"
			#default="{ field, errorMessage }"
		>
			<tw-input class="!w-1/2 h-14" v-bind="field" />
			<hr />
			<p>{{ errorMessage }}</p>
		</Field>

		<TwButton class="!w-44 mt-5">提交表单</TwButton>
	</Form>
</template>

<style lang="scss"></style>

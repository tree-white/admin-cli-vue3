<script setup lang="ts">
/**
 * 使用API的形式校验
 */
import { defineRule, configure, useField } from 'vee-validate'
import { required, min, max, confirmed, email } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'

defineRule('email', email)
defineRule('required', required)

configure({
	generateMessage: localize('zh_CN', zh_CN),
})

const { errorMessage: usernameError, value: usernameValue } = useField(
	'username',
	{ required: true, email: true },
	{
		label: '用户名',
	}
)
</script>

<template>
	<div>
		<input type="text" v-model="usernameValue" class="!w-1/2 h-14" />
		<p>{{ usernameError }}</p>
		<!-- <button>提交表单</button> -->
	</div>
</template>

<style lang="scss">
div {
	@apply flex w-screen h-screen justify-center items-center bg-gray-200 flex-col;
	input {
		@apply border-4 p-2 rounded-md border-violet-500 outline-none;
	}
	button {
		@apply border bg-gray-600 px-4 rounded-md text-white;
	}
}
</style>

<script setup lang="ts">
/**
 * 实用封装好的检验通过组件方式使用
 */
import valid from '@/plugins/validate'
const { Form, Field } = valid

const onSubmit = (values: any) => {
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

		<tw-button class="!w-44 mt-5">提交表单</tw-button>
	</Form>
</template>

<style lang="scss"></style>

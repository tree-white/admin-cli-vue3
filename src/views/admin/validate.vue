<script setup lang="ts">
/**
 * 使用封装好的验证插件
 */
import valid from '@/plugins/validate'
const { Form } = valid

const { handleSubmit, errors } = valid.useForm({
	initialValues: { username: 'Trwite' },
	validationSchema: { username: valid.yup.string().required().email().label('账号') },
})

const { errorMessage: usernameError, value: usernameValue } = valid.useField('username', {}, { label: '用户名' })

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

<style lang="scss" scoped>
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

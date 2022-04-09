<script setup lang="ts">
import userApi from '@/api/userApi'
import validate from '@/plugins/validate'
import { store } from '@/utils'
import { useRouter } from 'vue-router'
const { Form, Field, ErrorMessage } = validate
const router = useRouter()

// 使用yup
// const schema = validate.yup.object().shape({
// 	account: validate.yup.string().required().email().label('账号'),
// 	password: validate.yup.string().required().min(3).label('密码'),
// })

const schema = {
	account: { required: true, regex: /.+@.+\..+|\d{11}/ },
	password: { required: true, min: 3 },
}

const onSubmit = async (values: any) => {
	console.log(values)
	const {
		result: { token },
	} = await userApi.login(values)
	console.log('token=>', token)
	// 存储token
	store.set('token', { token })
	// 跳转到首页
	router.push({ name: 'home' })
}
</script>

<script lang="ts">
export default {
	route: { name: 'login', meta: { guest: true } },
}
</script>

<template>
	<Form @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
		<div class="sm:w-10/12 md:w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
			<div class="p-6 flex flex-col justify-between">
				<h2 class="text-center text-gray-700 text-lg">登录</h2>
				<div>
					<Field
						name="account"
						value="admin@trwite.com"
						class="tw-input transition"
						placeholder="请输入邮箱或手机号"
						label="账号"
					/>
					<!-- 使用自己定义的错误提示 -->
					<div class="tw-error transition" v-if="errors.account">请输入邮箱或手机号</div>
					<!-- <ErrorMessage name="account" as="div" class="tw-error" /> -->
				</div>
				<div>
					<Field
						name="password"
						value="trwite"
						class="tw-input"
						:validate-on-input="true"
						label="密码"
						type="password"
					/>
					<ErrorMessage name="password" as="div" class="tw-error" />
				</div>
				<div>
					<tw-button>登录</tw-button>
					<div class="flex justify-center align-center mt-2">
						<i class="fa-brands fa-weixin bg-green-500 text-white p-1 rounded-full cursor-pointer"></i>
					</div>
					<div class="flex gap-3 justify-center mt-3">
						<tw-link href="https://blog.treewhite.com" target="_blank">网站首页</tw-link>
						<tw-link>注册</tw-link>
						<tw-link>找回密码</tw-link>
					</div>
				</div>
			</div>
			<div class="hidden md:block">
				<img src="/images/loginCover.jpg" alt="" class="h-80 w-full object-cover" />
			</div>
		</div>
	</Form>
</template>

<style lang="scss" scoped>
form {
	@apply bg-slate-300 h-screen flex justify-center items-center px-6;
}
</style>

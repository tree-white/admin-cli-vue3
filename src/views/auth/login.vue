<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
	account: 'tw',
	password: '',
})
</script>

<template>
	{{ form }}
	<div class="bg-slate-300 h-screen flex justify-center items-center px-6">
		<div
			class="sm:w-10/12 md:w-[720px] bg-white -translate-y-36 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
		>
			<div class="p-6 flex flex-col justify-between">
				<h2 class="text-center text-gray-700 text-lg">登录</h2>
				<tw-input v-model="form.account" placeholder="请输入手机号或邮箱" />
				<tw-input v-model="form.password" placeholder="请输入密码" />
				<div>
					<tw-button>登录</tw-button>
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
	</div>
</template>

<style lang="scss"></style>

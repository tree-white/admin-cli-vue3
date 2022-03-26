<script setup lang="ts">
// const res = await fetch('http://localhost:4000/api/info').then((r) => r.json())
// import userApi from '@/api/userApi'
// const res = await userApi.info()
// const token = await userApi.login()
// console.log(token.result.token)
</script>

<template>
	<ul class="bg-red-800 text-white text-center flex justify-evenly pt-2 pb-2 cursor-pointer">
		<li>首页</li>
		<li>商品</li>
		<li>评价</li>
	</ul>
	<router-view></router-view>
</template>

<style></style>

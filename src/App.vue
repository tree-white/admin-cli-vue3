<script setup lang="ts">
import helper, { env } from './types/helper'
console.log(env);
console.log(helper.env)
console.log(import.meta.env)
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

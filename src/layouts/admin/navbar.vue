<script setup lang="ts"></script>

<template>
	<div class="bg-white p-4 flex justify-between items-center">
		<!-- 面包屑 -->
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
			<el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
		</el-breadcrumb>

		<!-- 右侧头像 -->
		<div class="flex justify-center items-center relative group cursor-pointer">
			<img src="/images/宇航员.jpg" alt="" class="w-8 h-8 rounded-full object-cover" />
			<span class="ml-1 text-sm text-gray-600">木白欧巴</span>
			<!-- 弹出菜单 -->
			<section
				class="group-hover:block hidden absolute top-full bg-white shadow-sm px-5 whitespace-nowrap border rounded-md"
			>
				<div class="flex items-center border-b py-2">
					<i class="fas fa-square-rss"></i>
					<span class="text-xs text-gray-600 ml-3">文档资料</span>
				</div>
				<div class="flex items-center border-b py-2">
					<i class="fas fa-square-rss"></i>
					<span class="text-xs text-gray-600 ml-3">用户管理</span>
				</div>
				<div class="flex items-center py-2">
					<i class="fas fa-square-rss"></i>
					<span class="text-xs text-gray-600 ml-3">个人中心</span>
				</div>
			</section>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

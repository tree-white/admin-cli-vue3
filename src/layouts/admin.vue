<script setup lang="ts">
import Menu from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
</script>

<template>
	<div class="admin h-screen w-screen flex">
		<!-- 左侧菜单 -->
		<div class="menus w-[200px] bg-gray-800 text-white p-4">
			<!-- Logo -->
			<div class="logo flex items-center cursor-pointer">
				<img src="/images/logo.png" alt="" class="w-10 h-10 p-1 rounded-full object-cover bg-white" />
				<div class="flex-1 text-center">Trwite后台管理</div>
			</div>

			<!-- 菜单 -->
			<Menu />
		</div>
		<!-- 右侧内容 -->
		<div class="content flex-1 bg-gray-200">
			<Navbar />
			<HistoryLink />
			<router-view />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
export default {
	route: { meta: { auth: true } },
}
</script>

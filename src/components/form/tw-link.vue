<script setup lang="ts"></script>

<template>
	<a href="" class="tw-link">
		<slot>超链接</slot>
	</a>
</template>

<style lang="scss" scoped>
.tw-link {
	@apply text-xs text-gray-700 hover:text-orange-400 hover:font-bold duration-300;
}
</style>

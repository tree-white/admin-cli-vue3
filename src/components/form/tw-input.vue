<script setup lang="ts">
const props = defineProps({
	modelValue: String,
})
</script>

<template>
	<input
		type="text"
		class="tw-input"
		:value="props.modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<style lang="scss" scoped>
.tw-input {
	@apply w-full border border-gray-200 rounded-md px-2 py-1 outline-none placeholder:text-sm focus:ring-2 ring-violet-600 duration-300;
}
</style>

<script setup lang="ts"></script>

<template>
	<router-view></router-view>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
	route: {
		meta: {
			auth: true,
		},
	},
}
</script>

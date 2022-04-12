<script setup lang="ts">
import { ref } from 'vue'

interface IMenuItem {
	title: string
	icon?: string
	active?: boolean
}
interface IMenu extends IMenuItem {
	children?: IMenuItem[]
}
const menus = ref<IMenu[]>([
	{
		title: '错误页面',
		icon: 'fab fa-behance-square',
		active: true,
		children: [{ title: '404错误页面', active: true }, { title: '500错误页面' }, { title: '触发异常' }],
	},
	{
		title: '编辑器',
		icon: 'fas fa-pen-to-square',
		children: [{ title: 'Markdown编辑器' }, { title: '富文本编辑器' }],
	},
])

// 菜单点击事件
const handle = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
	// 先隐藏所有菜单
	if (!pmenu.active) {
		menus.value.forEach((pmenu) => (pmenu.active = false))
	}
	// 再显示当前菜单
	pmenu.active = !pmenu.active
}
</script>

<template>
	<div class="menu">
		<dl @click="handle(menu)" v-for="(menu, index) of menus" :key="index">
			<dt>
				<section>
					<i :class="menu.icon"></i>
					<span>{{ menu.title }}</span>
				</section>
				<section>
					<i :class="`fas fa-angle-${menu.active ? 'up' : 'down'}`"></i>
				</section>
			</dt>
			<dd v-show="menu.active" v-for="(cmenu, index) of menu.children" :key="index" :class="{ active: cmenu.active }">
				{{ cmenu.title }}
			</dd>
		</dl>
	</div>
</template>

<style lang="scss" scoped>
.menu {
	dl {
		@apply text-gray-300 text-sm;

		dt {
			@apply text-sm mt-6 flex justify-between cursor-pointer items-center hover:text-white duration-300;

			section {
				@apply flex items-center;

				i {
					@apply mr-2 text-lg;
				}
			}
		}

		dd {
			@apply py-3 pl-4 my-2  hover:text-white hover:bg-violet-500 duration-300 cursor-pointer rounded-md;

			&.active {
				@apply bg-violet-500 text-white hover:bg-violet-400 duration-300 cursor-pointer;
			}
		}
	}
}
</style>

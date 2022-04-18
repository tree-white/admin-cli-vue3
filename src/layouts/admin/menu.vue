<script setup lang="ts">
import { IMenu } from '#/menu'
import router from '@/router'

// 使用独立的composables菜单
import menuService from '@/composables/menu'

// -------------------------------
// import menuStore from '@/store/menuStore'
// const { menus } = menuStore()

/** 重置状态 - 隐藏菜单 */
const reset = (pMenu: IMenu) => {
  menus.forEach(menu => {
    if (menu !== pMenu) {
      menu.isClick = false
    }

    menu.children?.forEach(cMenu => {
      if (cMenu) {
        cMenu.isClick = false
      }
    })
  })
}

/** 菜单点击事件 */
const handle = (pMenu: IMenu, cMenu?: IMenu) => {
  reset(pMenu)
  pMenu.isClick = cMenu ? true : !pMenu.isClick
  if (cMenu) {
    cMenu.isClick = true
    cMenu.route && router.push({ name: cMenu.route })
  }
}
</script>

<template>
  <div class="menus w-[200px] bg-gray-800 text-white p-4">
    <!-- Logo -->
    <div class="logo flex items-center cursor-pointer">
      <img src="/images/logo.png" alt="" class="w-10 h-10 p-1 rounded-full object-cover bg-white" />
      <div class="flex-1 text-center">Trwite后台管理</div>
    </div>

    <!-- 菜单 -->
    <div class="menu">
      <dl v-for="(menu, index) of menuService.menus.value" :key="index">
        <dt @click="menu.isClick = true">
          <section>
            <i :class="menu.icon"></i>
            <span>{{ menu.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': menu.isClick }"></i>
          </section>
        </dt>
        <dd
          v-show="menu.isClick"
          v-for="(childMenu, index) of menu.children"
          :class="{ active: childMenu.isClick }"
          :key="index"
          @click="$router.push({ name: childMenu.route })"
        >
          {{ childMenu.title }}
        </dd>
      </dl>
    </div>
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
      @apply py-3 pl-4 my-2  hover:text-white hover:bg-violet-500 duration-300 cursor-pointer rounded-md bg-gray-700;

      &.active {
        @apply bg-violet-500 text-white hover:bg-violet-400 duration-300 cursor-pointer;
      }
    }
  }
}
</style>

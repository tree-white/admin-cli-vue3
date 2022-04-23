<script setup lang="ts">
import { IMenu } from '#/menu'
import router from '@/router'

// 使用独立的composables菜单
import menuService from '@/composables/menu'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

// -------------------------------
// import menuStore from '@/store/menuStore'
// const { menus } = menuStore()

/** 重置状态 - 隐藏菜单(废弃) */
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

/** 菜单点击事件(废弃) */
const handle = (pMenu: IMenu, cMenu?: IMenu) => {
  reset(pMenu)
  pMenu.isClick = cMenu ? true : !pMenu.isClick
  if (cMenu) {
    cMenu.isClick = true
    cMenu.route && router.push({ name: cMenu.route })
  }
}

const route = useRoute()
menuService.setCurrentMenu(route)
watch(route, () => menuService.setCurrentMenu(route), { immediate: true })
</script>

<template>
  <div class="menus w-[200px] bg-gray-800 text-white" :class="{ close: menuService.close.value }">
    <!-- Logo -->
    <div class="logo flex items-center cursor-pointer p-4">
      <img src="/images/logo.png" alt="" class="w-10 h-10 p-1 rounded-full object-cover bg-white" />
      <span class="flex-1 text-center">Trwite后台管理</span>
    </div>

    <!-- 菜单 -->
    <div class="menu">
      <!-- 仪表盘 -->
      <dl>
        <dt
          @click="$router.push({ name: 'adminHome' })"
          :class="{ 'bg-violet-600 text-white p-3': $route.name == 'adminHome' }"
        >
          <section>
            <i class="fas fa-home"></i>
            <span>仪表盘</span>
          </section>
        </dt>
      </dl>
      <!-- 遍历菜单 -->
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
      @apply text-sm p-4 flex justify-between cursor-pointer items-center hover:text-white duration-300;

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

.close {
  width: auto;

  & .logo {
    span {
      @apply hidden;
    }
  }

  & .menu {
    dt {
      @apply justify-center;
      section {
        &:first-child {
          i {
            @apply mr-0;
          }
          span {
            @apply hidden;
          }
        }
        &:nth-child(2) {
          @apply hidden;
        }
      }
    }
  }
}
</style>

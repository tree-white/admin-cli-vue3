<script setup lang="ts">
import { router } from '@/store/router'
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router'
const routeService = useRouter()
const routerStore = router()

/** 重置状态 - 隐藏菜单 */
const reset = (pRoute: RouteRecordNormalized) => {
  routerStore.routes.forEach(route => {
    if (route !== pRoute) {
      route.meta.isClick = false
    }

    route.children.forEach(route => {
      if (route.meta) {
        route.meta.isClick = false
        console.log('rest=>', route.meta.isClick)
      }
    })
  })
}

/** 菜单点击事件 */
const handle = (pRoute: RouteRecordNormalized, cRoute?: RouteRecordRaw) => {
  reset(pRoute)
  pRoute.meta.isClick = cRoute ? true : !pRoute.meta.isClick
  if (cRoute && cRoute.meta) {
    cRoute.meta.isClick = true
    routeService.push(cRoute)
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
      <dl v-for="(route, index) of routerStore.routes" :key="index">
        <dt @click="handle(route)">
          <section>
            <i :class="route.meta.icon"></i>
            <span>{{ route.meta.title }}</span>
          </section>
          <section>
            <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': route.meta.isClick }"></i>
          </section>
        </dt>
        <dd
          v-show="route.meta.isClick"
          v-for="(childRoute, index) of route.children"
          :class="{ active: childRoute.meta?.isClick }"
          :key="index"
          @click="handle(route, childRoute)"
        >
          {{ childRoute.meta?.title }}
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

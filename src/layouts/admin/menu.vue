<script setup lang="ts">
  // 使用独立的composables菜单
  import menuService from '@/composables/menu'
  import { useRoute } from 'vue-router'
  import { watch } from 'vue'
  import * as icons from '@icon-park/vue-next'

  const route = useRoute()
  menuService.setCurrentMenu(route)
  watch(route, () => menuService.setCurrentMenu(route), { immediate: true })
</script>

<template>
  <div class="admin-menu" :class="{ close: menuService.close.value }">
    <div class="menus">
      <!-- Logo -->
      <div class="logo">
        <img src="/images/logo.png" alt="" />
        <span>Trwite后台管理</span>
      </div>

      <!-- 菜单 -->
      <div class="menu">
        <!-- 遍历菜单 -->
        <dl v-for="(menu, index) of menuService.menus.value" :key="index">
          <dt @click="menuService.toggleParentMenu(menu)">
            <section>
              <component v-if="menu.icon" :is="icons[menu.icon]" theme="filled" size="20" fill="#9b9b9b"></component>
              <span>{{ menu.title }}</span>
            </section>
            <section>
              <icon-down
                theme="filled"
                size="20"
                fill="#9b9b9b"
                class="duration-300"
                :class="{ 'rotate-180': menu.isClick }"
              />
            </section>
          </dt>
          <dd :class="!menu.isClick || menuService.close.value ? 'hidden' : 'block'">
            <div
              v-for="(childMenu, index) of menu.children"
              :class="{ active: childMenu.isClick }"
              :key="index"
              @click="$router.push({ name: childMenu.route })"
            >
              {{ childMenu.title }}
            </div>
          </dd>
        </dl>
      </div>
    </div>

    <!-- 遮罩层 -->
    <div class="bg md:hidden" @click="menuService.toggleState"></div>
  </div>
</template>

<style lang="scss" scoped>
  .admin-menu {
    @apply z-20;
    .menus {
      @apply w-[200px] h-screen bg-gray-800 text-white z-20;

      .logo {
        @apply flex items-center cursor-pointer p-4 justify-center;

        img {
          @apply w-10 h-10 p-1 rounded-full object-cover bg-white;
        }

        span {
          @apply flex-1 text-center;
        }
      }

      .menu {
        dl {
          @apply relative text-gray-300 text-sm p-4;

          dt {
            @apply text-sm  flex justify-between cursor-pointer items-center hover:text-white duration-300;

            section {
              @apply flex items-center;

              i {
                @apply mr-2 text-lg;
              }
            }
          }

          dd {
            div {
              @apply py-3 pl-4 my-2  hover:text-white hover:bg-violet-500 duration-300 cursor-pointer rounded-md bg-gray-700;

              &.active {
                @apply bg-violet-500 text-white hover:bg-violet-400 duration-300 cursor-pointer;
              }
            }
          }
        }
      }
    }
  }
  @media screen and(min-width:768px) {
    .admin-menu {
      &.close {
        .menus {
          width: auto;

          .logo {
            span {
              @apply hidden;
            }
          }

          .menu {
            dl {
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
              &:hover {
                dd {
                  @apply block absolute left-full top-0 w-[200px] bg-gray-700 pl-2 pr-2;
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and(max-width:768px) {
    .admin-menu {
      .menus {
        @apply absolute top-0 bottom-0 z-50;
      }
      .bg {
        @apply bg-gray-100 opacity-75 w-screen h-screen absolute left-0 top-0 z-10;
      }
      &.close {
        @apply hidden;
      }
    }
  }
</style>

<script setup lang="ts">
  import * as echarts from 'echarts'
  import * as icons from '@icon-park/vue-next'
  import { echart1, echart2 } from './echart'
  import { IconType } from '@icon-park/vue-next/es/all'
  interface ICard {
    id: number
    title: string
    price: number
    icon: IconType
    iconColor: string
    totalTitle: string
    total: number
  }

  nextTick(() => {
    // 初始化echarts实例
    echarts.init(document.getElementById('echart1') as HTMLDivElement).setOption(echart1)
    echarts.init(document.getElementById('echart2') as HTMLDivElement).setOption(echart2)
  })

  const cards = ref<ICard[]>([
    {
      id: 1,
      title: '总人数',
      price: 23742,
      iconColor: 'text-violet-500',
      icon: 'IdCardH',
      totalTitle: '总人数',
      total: 123042
    },
    {
      id: 2,
      title: '销售额',
      price: 123422,
      iconColor: 'text-red-500',
      icon: 'SalesReport',
      totalTitle: '总销售额',
      total: 53433
    },
    {
      id: 3,
      title: '订单数',
      price: 1232,
      iconColor: 'text-green-700',
      icon: 'Order',
      totalTitle: '总订单数',
      total: 4362
    },
    {
      id: 4,
      title: '评论数',
      price: 8374,
      iconColor: 'text-blue-500',
      icon: 'Comments',
      totalTitle: '总评论数',
      total: 34564
    }
  ])
</script>

<template>
  <div>
    <!-- 统计模块 -->
    <div class="grid gap-3 md:grid-cols-4">
      <el-card
        shadow="hover"
        :body-style="{ padding: '20px' }"
        v-for="card of cards"
        :key="card.id"
        class="cursor-pointer"
      >
        <template #header>
          <div class="flex items-center justify-between">
            {{ card.title }}
            <el-tag type="danger" size="small" effect="dark">月</el-tag>
          </div>
        </template>

        <section class="mt-3 flex justify-between items-center">
          {{ card.price }}
          <component :is="icons[card.icon]" theme="filled" size="48" :class="card.iconColor"></component>
        </section>

        <section class="flex justify-between items-center text-base mt-6">
          {{ card.totalTitle }}
          <span>{{ card.total }}人</span>
        </section>
      </el-card>
    </div>

    <!-- ECharts 图表 -->
    <div class="mt-5 grid md:grid-cols-2 gap-3">
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <template #header>
          <div>
            <span>用户统计</span>
          </div>
        </template>
        <!-- card body -->
        <div id="echart1" class="w-full h-72"></div>
      </el-card>

      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <template #header>
          <div>
            <span>销售额</span>
          </div>
        </template>
        <!-- card body -->
        <div id="echart2" class="w-full h-72"></div>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

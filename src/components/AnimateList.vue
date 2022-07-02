<script setup lang="ts">
  // 动画库
  import gsap from 'gsap'
  import { RendererElement } from 'vue'

  interface props {
    tag?: string
    duration?: number
    delay?: number
  }
  const props = withDefaults(defineProps<props>(), {
    tag: '',
    duration: 1,
    delay: 0.2
  })

  // 定义动画进入前钩子
  const beforeEnter = (el: RendererElement) => {
    gsap.set(el, {
      opacity: 0
    })
  }
  // 定义动画进入钩子
  const enter = (el: RendererElement) => {
    gsap.to(el, {
      duration: props.duration, // 等待时间
      opacity: 1,
      delay: el.dataset.index * props.delay // 延迟时间
    })
  }
</script>

<template>
  <div class="animate-list">
    <TransitionGroup :tag="props.tag" name="animate" appear @before-enter="beforeEnter" @enter="enter">
      <slot></slot>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
  .animate-list {
    // 定义动画离开时的样式
    .animate-leave-active {
      transition: all 0.38s ease;
      position: absolute;
      width: calc(100% - 32px);
    }
    // 定义动画离开后的样式
    .animate-leave-to {
      opacity: 0;
    }
    // 定义动画组变化时的动画移动
    .animate-move {
      transition: all 0.38s ease;
    }
  }
</style>

<script setup lang="ts">
  import { article } from '@/apis/articleApi'
  const { result } = await article()
  const artilces = ref(result)
  const del = (index: number) => {
    artilces.value.splice(index, 1)
  }
</script>

<template>
  <div class="article">
    <TransitionGroup tag="ul" name="animate">
      <li v-for="(article, index) of artilces" :key="article.id" @click="del(index)">
        {{ article.title }}
      </li>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
  .article {
    position: relative;
    ul {
      li {
        @apply p-3 mb-3 bg-green-500 text-white;
      }
    }
  }

  .animate-leave-active {
    transition: all 0.38s ease;
    position: absolute;
    width: 100%;
  }

  .animate-leave-to {
    opacity: 0;
  }
  .animate-move {
    transition: all 0.38s ease;
  }
</style>

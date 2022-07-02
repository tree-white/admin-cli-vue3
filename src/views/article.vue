<script setup lang="ts">
  import { article } from '@/apis/articleApi'

  const artilces = ref()
  article().then(({ result }) => (artilces.value = result))
  const del = (index: number) => {
    artilces.value.splice(index, 1)
  }
</script>

<template>
  <div class="article">
    <AnimateList tag="ul" :delay="0.5" :duration="2">
      <li :data-index="index * 0.1" v-for="(article, index) of artilces" :key="article.id" @click="del(index)">
        {{ article.title }}
      </li>
    </AnimateList>
  </div>
</template>

<style lang="scss" scoped>
  .article {
    @apply relative bg-slate-500 p-4 w-full min-h-screen;

    ul {
      li {
        @apply p-3 mb-3 bg-green-500 text-white rounded-md;
      }
    }
  }
</style>

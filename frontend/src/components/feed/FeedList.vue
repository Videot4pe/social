<template>
  <div>
    <post-card v-for="post in posts" :key="post.id" class="q-mb-md" />
  </div>
</template>

<script setup lang="ts">
import PostCard from "components/feed/PostCard.vue";

const posts = [
  {
    id: 1
  },
  {
    id: 2
  }
]
</script>

<template>
  <q-tabs
    v-model="tab"
    no-caps
    align="justify"
    class="text-black shadow-2"
    :breakpoint="4"
    indicator-color="primary"
  >
    <q-tab class="text-left" name="posts" :label="`${posts} posts`"></q-tab>
    <q-tab name="media" :label="`${media} media`"></q-tab>
  </q-tabs>
</template>

<script setup lang="ts">

import { ref } from "vue";

const props = defineProps({
  posts: {
    type: Number,
    default: 0
  },
  media: {
    type: Number,
    default: 0
  },
})

const tab = ref('posts')

</script>

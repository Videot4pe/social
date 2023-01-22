<template>
  <styled-card >
    <feed-header />
    <post-info class="q-pa-md" :posts="100" :media="100" />
    <div class="text q-my-md q-pa-md">text</div>
    <post-footer class="q-pa-md" :likes="post.likes" />
  </styled-card>
</template>

<script setup lang="ts">

import StyledCard from "components/common/StyledCard.vue";
import PostInfo from "components/feed/PostInfo.vue";
import PostFooter from "components/feed/PostFooter.vue";
import {PropType} from "vue";
import FeedHeader from "components/feed/FeedHeader.vue";

const props = defineProps({
  post: {
    type: Object as PropType<any>
  }
})

</script>

<style scoped lang="scss">
.text {
  font-weight: 400;
  font-size: 16px;
  color: #242529;
}
</style>

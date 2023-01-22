<template>
  <div class="flex justify-between">
    <div>
      <styled-round-button :label="likes" icon="mdi-heart-outline" />
      <styled-round-button class="q-ml-sm" icon="mdi-comment-text-outline" />
    </div>
    <styled-round-button class="q-ml-sm" icon="mdi-bookmark-outline" />
  </div>
</template>

<script setup lang="ts">

import StyledRoundButton from "components/common/StyledRoundButton.vue";

defineProps({
  likes: {
    type: Number
  }
})

</script>

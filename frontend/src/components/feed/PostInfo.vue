<template>
  <div class="flex justify-between post">
    <div class="flex">
      <q-avatar size="50">
        <q-img width="50px" height="50px" src="~/assets/company-logo.svg" />
      </q-avatar>
      <div class="self-center">
        <div class="post__name self-center q-ml-md">User Name</div>
        <div class="post__time self-center q-ml-md">14.12.2022</div>
      </div>
    </div>
    <styled-button small>Subscribe</styled-button>
  </div>
</template>

<script setup lang="ts">

import StyledButton from 'components/common/StyledButton.vue';
</script>

<style lang="scss" scoped>
.post {
  &__name {
    font-weight: 600;
    font-size: 18px;
  }
  &__time {
    font-weight: 400;
    font-size: 14px;
    color: #8A96A3;
  }
}
</style>

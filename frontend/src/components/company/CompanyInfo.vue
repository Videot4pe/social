<template>
  <div class="flex justify-between">
    <div class="flex">
      <q-avatar size="50">
        <q-img width="50px" height="50px" src="~/assets/company-logo.svg" />
      </q-avatar>
      <span class="company__name self-center q-ml-md">Company name</span>
    </div>
    <styled-button small>Autorize</styled-button>
  </div>
</template>

<script setup lang="ts">

import StyledButton from 'components/common/StyledButton.vue';
</script>

<style lang="scss" scoped>
.company {
  &__name {
    font-weight: 600;
    font-size: 18px;
  }
}
</style>

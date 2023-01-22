<template>
  <q-card class="no-shadow" v-bind="$attrs">
    <slot />
  </q-card>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .q-card {
    border-radius: 10px;
  }
</style>

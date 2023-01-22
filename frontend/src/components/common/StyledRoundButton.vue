<template>
  <label class="styled-round-button">
    <q-btn rounded text-color="grey-5" color="grey-4" size="12px" unelevated :label="label" :icon="icon" v-bind="$attrs" >
      <slot name="data" />
    </q-btn>
  </label>
</template>

<script setup lang="ts">

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  label: {
    type: String,
  },
  icon: {
    type: String
  }
})

</script>

<style lang="scss">
.styled-round-button {
  > .q-btn {
    padding: 8px;
    &__content {
    }
  }
}
.on-left {
  margin-right: 4px !important;
}
</style>

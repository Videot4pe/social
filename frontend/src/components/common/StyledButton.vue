<template>
  <label class="styled-button">
    <q-btn :class="classes" :color="color" no-caps v-bind="$attrs" >
      <slot />
    </q-btn>
  </label>
</template>

<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  small: {
    type: Boolean,
    default: true
  },
  medium: {
    type: Boolean,
    default: false
  },
  large: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary'
  }
})

const classes = computed(() => ({
  'styled-button--small': props.small,
  'styled-button--medium': props.medium,
  'styled-button--large': props.large
}))
</script>

<style lang="scss" scoped>
.styled-button {
  > .q-btn {

    font-weight: 700;
    font-size: 16px;

    &--rectangle {
      border-radius: 8px;
      height: 50px;
    }

  }

  &--small {
    width: 180px;
  }
  &--medium {
    width: 240px;
  }
  &--large {
    width: 330px;
  }
}
</style>

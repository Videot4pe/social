<template>
  <label class="styled-search">
    <q-input rounded dense standout placeholder="Find a profile" v-model="search" v-bind="$attrs">
      <template v-slot:append>
        <q-icon v-if="search === ''" name="search"></q-icon>
        <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''"></q-icon>
      </template>
    </q-input>
  </label>
</template>

<script setup lang="ts">

import { ref } from "vue";

const search = ref('')

</script>

<style lang="scss" scoped>
.styled-search {
  max-width: 260px;
  > .q-field {
    max-width: 260px;
    &__control {
    }
  }
}
</style>

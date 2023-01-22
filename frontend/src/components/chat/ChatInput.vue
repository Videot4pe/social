<template>
  <label class="chat-input" style="padding: 20px">
    <q-input
      v-model="input"
      standout
      bg-color="#F1EEF9"
      rounded
      placeholder="Write a message"
      @keydown.enter.prevent="() => {$emit('add', input); input = ''}"
      v-bind="$attrs"
    >
      <template v-slot:append>
        <div class="flex">
          <q-btn class="q-ml-sm" size="12px" round dense flat icon="mdi-face-outline" color="grey-6" />
          <q-btn class="q-ml-sm" size="12px" round dense flat icon="mdi-image-outline" color="grey-6" />
          <q-btn class="q-ml-sm" size="12px" round dense flat icon="mdi-paperclip" color="grey-6" />
        </div>
      </template>
    </q-input>
  </label>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

const input = ref('')

</script>

<style lang="scss">
.chat-input {

  background: #F8F8F8;

  > .q-field {
    &__control {
      height: 50px !important;
    }
    &__control-container {
    }
    &__native {

    }
  }
}
</style>

<template>
  <div
    class="message q-my-sm"
    :class="{
      'message--self': message.self,
      'message--from': !message.self
    }"
  >
    <div class="message__box">
      <q-avatar v-if="!message.self" class="self-end q-ma-sm" style="margin-bottom: 22px" size="30px">
        <q-img src="~/assets/company-logo.svg" content="fit" />
      </q-avatar>
      <div class="column">
        <div
          class="message__text"
          :class="{'message__text--self': message.self, 'message__text--from': !message.self}"
        >
          {{ message.text }}
          <div
            class="message__text__quote"
            :class="{'message__text__quote--self': message.self, 'message__text__quote--from': !message.self}"
          ></div>
        </div>
        <div
          class="message__time"
          :class="{'message__time--self': message.self, 'message__time--from': !message.self}"
        >
          {{ message.time }}
        </div>
      </div>
      <q-avatar v-if="message.self" class="self-end q-ma-sm" style="margin-bottom: 22px" size="30px">
        <q-img src="~/assets/company-logo.svg" content="fit" />
      </q-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">

import {PropType} from "vue";
import {Message} from "src/models/chat";

const props = defineProps({
  message: {
    type: Object as PropType<Message>
  },
})

</script>
<style scoped lang="scss">
.message {

  padding: 0 20px;
  width: 100%;

  &--self {
    display: flex;
    justify-content: flex-start;
  }
  &--self {
    display: flex;
    justify-content: flex-end;
  }

  &__box {
    display: flex;
    max-width: calc(100% - 40px);
  }

  &__text {
    position: relative;
    white-space: pre-wrap;
    border-radius: 10px;
    max-width: 100%;
    padding: 10px;
    &--self {
      text-align: right;
      background: #BC2EFF;
      color: white;
    }
    &--from {
      text-align: left;
      background: #F1EEF9;
      color: #242529;
    }

    &__quote {
      position: absolute;
      width: 22.5px;
      height: 11px;
      bottom: 0px;

      transform: matrix(-1, 0, 0, 1, 0, 0);

      &--self {
        background: #BC2EFF;
        right: 0;
      }
      &--from {
        text-align: left;
        background: #F1EEF9;
        left: 0;
      }
    }
  }
  &__time {
    margin-top: 8px;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-align: right;
    color: #8A96A3;

    &--self {
      text-align: right;
    }
    &--from {
      text-align: left;
    }
  }
}
</style>

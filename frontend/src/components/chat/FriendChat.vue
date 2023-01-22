<template>
  <styled-card
    class="flex friend-chat q-pa-sm"
    :class="{'friend-chat--has-update': props.friend.newMessagesCount > 0}"
  >
    <div class="flex justify-between full-width">
      <q-avatar class="self-center relative-position" size="50px">
        <q-img src="~/assets/company-logo.svg" content="fit" />
        <div class="friend-chat--online" v-if="props.friend.online" />
      </q-avatar>
      <div class="q-ml-sm column justify-between" style="padding: 2px">
        <div class="flex justify-between">
          <div class="flex">
            <div class="friend-chat__text--name">{{ props.friend.name }}</div>
            <div class="friend-chat__text--sub">{{ props.friend.tag }}</div>
          </div>
          <div class="flex" style="margin-top: -4px">
            <div class="friend-chat__new-messages self-center">{{ props.friend.newMessagesCount }}</div>
            <q-btn class="q-ml-sm" size="12px" round dense flat icon="mdi-window-close" color="grey-6" />
          </div>
        </div>
        <div class="flex justify-between">
          <div class="friend-chat__text--ordinary ellipsis" style="max-width: 240px;">{{ props.friend.lastMessage }}</div>
          <div class="text-grey friend-chat__text--sub">{{ props.friend.lastDate }}</div>
        </div>
      </div>
    </div>
  </styled-card>
</template>

<script setup lang="ts">

import StyledCard from "components/common/StyledCard.vue";
import {useQuasar} from "quasar";
import {computed, PropType} from "vue";
import {Friend} from "src/models/chat";

const $q = useQuasar()
const isMobile = computed(() => $q.platform.is.mobile)

const props = defineProps({
  friend: {
    type: Object as PropType<Friend>,
    require: true
  },
})

</script>

<style lang="scss" scoped>
.friend-chat {
  cursor: pointer;

  &--has-update {
    background: #C9F4E5;
  }

  &__new-messages {
    border-radius: 20px;
    font-weight: 600;
    font-size: 12px;
    color: white;
    padding: 1px 8px 1px 8px;
    background: $primary;
  }

  &--online {
    position: absolute;
    border-radius: 50%;
    right: 2.5px;
    bottom: 2.5px;
    border: 2px solid white;
    width: 10px;
    height: 10px;
    background: #00D186;
  }

  &__text {
    &--sub {
      font-weight: 400;
      font-size: 12px;
      color: #8A96A3;
    }
    &--name {
      font-weight: 600;
      font-size: 14px;
      color: #242529;
    }
    &--ordinary {
      font-weight: 400;
      font-size: 12px;
      color: #242529;
    }
  }
}
</style>

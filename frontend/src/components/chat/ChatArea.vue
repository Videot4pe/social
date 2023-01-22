<template>
  <styled-card class="relative-position">
    <styled-card class="flex friend q-px-sm">
      <div class="flex justify-between full-width">
        <div class="flex">
          <q-avatar class="self-center relative-position" size="30px">
            <q-img src="~/assets/company-logo.svg" content="fit" />
          </q-avatar>
          <div class="q-ml-sm column justify-between q-py-sm">
            <div class="friend__text--name">{{ props.friend.name }}</div>
            <div class="friend__text--sub">{{ props.friend.tag }}</div>
          </div>
          <div class="q-ml-lg self-center">
            <div class="friend__text--sub">{{ props.friend.lastOnline }}</div>
          </div>
        </div>
        <div class="flex self-center">
          <q-btn size="12px" round dense flat icon="search" color="grey-6" />
          <q-btn class="q-ml-sm" size="12px" round dense flat icon="mdi-dots-horizontal" color="grey-6" />
        </div>
      </div>
    </styled-card>
    <div class="chat-area">
      <chat-input class="chat-area__chat-input" @add="onMessage($event)" />
      <chat-message v-for="message in messages" :key="message.id" :message="message" />
    </div>
  </styled-card>
</template>
<script setup lang="ts">
import StyledCard from "components/common/StyledCard.vue";
import {PropType, ref} from "vue";
import {Friend, Message} from "src/models/chat";
import ChatInput from "components/chat/ChatInput.vue";
import ChatMessage from "components/chat/ChatMessage.vue";

const props = defineProps({
  chatId: {
    type: Number,
  },
  friend: {
    type: Object as PropType<Friend>
  }
})
const messages = ref<Message[]>([
  {
    id: 1,
    text: '123 test 123 test 123 test 123 test 123 test 123 test 123 test 123 test 123 test',
    self: true,
    time: '1:30 pm'
  },
  {
    id: 2,
    text: '235565436 test',
    self: true,
    time: '1:30 pm'
  },
  {
    id: 3,
    text: '235565436 235565436 235565436235565436 235565436 235565436235565436 235565436 235565436235565436 235565436 235565436235565436 235565436 235565436235565436 235565436 235565436235565436 235565436 235565436235565436 235565436 235565436235565436 235565436 235565436',
    self: false,
    time: '1:30 pm'
  },
])

const onMessage = (text: string) => {
  const newMessage = {
    id: 0,
    text,
    time: '1:30 pm',
    self: true
  }
  messages.value = [newMessage, ...messages.value]
}
</script>

<style scoped lang="scss">
.friend {
  position: sticky;
  bottom: 0;

  box-shadow: 0 15px 120px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

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

.chat-area {
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  background: #F8F8F8;
  height: 100%;
  max-height: calc(100vh - 74px - 55px);

  display: flex;
  flex-direction: column-reverse;

  &__chat-input {
    width: 100%;
    position: sticky;
    z-index: 1;
    bottom: 0;
  }
}
</style>

<template>
  <q-page class="q-pb-lg">
    <div :style="!isMobile ? 'display: grid; grid-template-columns: 380px 480px; grid-gap: 20px; height: 100%' : 'height: 100'">
      <friend-list v-if="friendListState" :friends="friends" @chat="activeChatId = $event" />
      <chat-area v-if="chatAreaState" :friend="activeFriend" :chat-id="activeChatId" @back="activeChatId = undefined" />
    </div>
  </q-page>
</template>

<script setup lang="ts">

import ChatArea from "components/chat/ChatArea.vue";
import FriendList from "components/chat/FriendList.vue";
import {computed, ref} from "vue";
import {Friend} from "src/models/chat";
import {useQuasar} from "quasar";

const friends = ref<Friend[]>([
  {
    id: 1,
    avatar: '~/assets/company.svg',
    name: 'First friend',
    online: true,
    tag: '@tag',
    lastMessage: 'last message last message last message last message last message last message ',
    lastDate: 'Sep 14',
    lastOnline: '14 days ago',
    newMessagesCount: 10
  },
  {
    id: 2,
    avatar: '~/assets/company.svg',
    name: 'Second friend',
    online: false,
    tag: '@tag',
    lastMessage: 'last message last message last message last message last message last message ',
    lastDate: 'Sep 14',
    lastOnline: '14 days ago',
    newMessagesCount: 2
  },
  {
    id: 3,
    avatar: '~/assets/company.svg',
    name: 'Third friend',
    online: true,
    tag: '@tag',
    lastMessage: 'last message last message last message last message last message last message ',
    lastDate: 'Sep 14',
    lastOnline: '14 days ago',
    newMessagesCount: 0
  },
])

const activeChatId = ref<number | undefined>()
const activeFriend = computed(() => {
  return friends.value.find(friend => friend.id === activeChatId.value)
})

const $q = useQuasar()
const isMobile = computed(() => $q.platform.is.mobile)

const friendListState = computed(() => {
  return isMobile.value ? activeChatId.value === undefined : true
})
const chatAreaState = computed(() => {
  return isMobile.value ? activeChatId.value != undefined : activeChatId.value && activeFriend.value
})

</script>

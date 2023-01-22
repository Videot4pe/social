<template>
  <styled-card class="friends">
    <q-input v-model="search" class="friends__search-input" flat outlined placeholder="Find">
      <template #prepend>
        <q-icon name="search"></q-icon>
      </template>
      <template #append>
<!--        <q-btn class="q-ml-sm" size="12px" round dense flat icon="mdi-dots-horizontal" color="grey-6" />-->
      </template>
    </q-input>
    <div class="q-pa-sm">
      <div v-for="friend in filteredFriends" :key="friend.name">
        <friend-chat :friend="friend" @click="$emit('chat', friend.id)" />
        <q-separator color="grey-2" style="margin: 4px" />
      </div>
    </div>
  </styled-card>
</template>

<script setup lang="ts">

import StyledCard from "components/common/StyledCard.vue";
import {computed, PropType, ref} from "vue";
import {Friend} from "src/models/chat";
import FriendChat from "components/chat/FriendChat.vue";

const search = ref('')
const props = defineProps({
  friends: {
    type: Array as PropType<Friend[]>
  }
})

const filteredFriends = computed(
  () => props.friends
    ?.filter(friend => friend.name.toLowerCase().includes(search.value.toLowerCase()))
)
</script>

<style lang="scss">

.friends {
  background: #F8F8F8;

  &__search-input {
    .q-field {
      &__control {
        border-radius: 10px !important;

        &::before {
          border: none;
        }
      }
      &--outlined {
        border-radius: 10px !important;
      }
    }
  }
}

</style>

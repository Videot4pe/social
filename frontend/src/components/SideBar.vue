<template>
  <q-list class="text-white">
    <q-item v-for="route in routes" :key="route.name" :to="route.link" class="q-pl-sm"  clickable v-ripple>
      <q-item-section avatar>
        <q-icon :name="route.icon"></q-icon>
      </q-item-section>

      <q-item-section>
        {{ route.name }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>

const routes = [
  {
    icon: 'mdi-home-outline',
    name: 'Home',
    link: '/'
  },
  {
    icon: 'mdi-chat-processing-outline',
    name: 'Messages',
    link: '/messages'
  },
]
</script>

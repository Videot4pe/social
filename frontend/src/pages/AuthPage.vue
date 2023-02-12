<template>
  <q-page>
    <div :class="!isMobile ? 'auth-page' : 'mobile'">
      <q-img v-if="!isMobile" height="450px" src="~/assets/auth.svg" content="fit" />
      <auth-block />
    </div>
  </q-page>
</template>

<script setup lang="ts">

import {useQuasar} from "quasar";
import {computed} from "vue";
import AuthBlock from "components/AuthBlock.vue";

const $q = useQuasar()
const isMobile = computed(() => $q.platform.is.mobile)


</script>

<style scoped lang="scss">
.auth-page {
  display: grid;
  grid-template-columns: 600px 580px;

  @media (max-width: 1250px) {
    grid-template-columns: 2.07fr 1fr;
  }
}
.mobile {
  height: 100vh;
}
</style>

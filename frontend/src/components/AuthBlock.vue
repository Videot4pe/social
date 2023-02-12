<template>
  <div :class="!isMobile ? 'auth-block' : 'mobile'" class="flex justify-center bg-white">
    <div class="column justify-center">
      <h5 class="text-center q-mb-lg">Log in</h5>
      <q-input v-model="login" style="width: 280px" bg-color="purple-6" outlined filled />
      <q-input v-model="password" class="q-my-lg" style="width: 280px" bg-color="purple-6" outlined filled />
      <styled-button style="width: 280px" color="primary">Log in</styled-button>
      <a class="auth-link text-center q-mt-lg q-mb-xs">Forgot your password?</a>
      <a class="auth-link text-center">Subscribe</a>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import StyledButton from "./common/StyledButton.vue";
import {useQuasar} from "quasar";

const login = ref()
const password = ref()

const $q = useQuasar()
const isMobile = computed(() => $q.platform.is.mobile)
</script>

<style scoped lang="scss">
.auth-block {

}
.auth-link {
  font-weight: 400;
  font-size: 14px;
  color: #00AFF0;
  cursor: pointer;
}

.mobile {
}
</style>

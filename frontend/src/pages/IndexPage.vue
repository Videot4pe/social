<template>
  <q-page>
    <div class="index-page" :style="!isMobile ? 'display: grid; grid-template-columns: 580px 280px; grid-gap: 20px' : 'padding-bottom: 150px'">
      <div>
        <company-card class="full-width" />
        <feed-list class="q-mt-lg" />
      </div>
      <recommendations-card v-if="!isMobile" />
    </div>
  </q-page>
</template>

<script setup lang="ts">

import CompanyCard from 'components/company/CompanyCard.vue';
import FeedList from "components/feed/FeedList.vue";
import RecommendationsCard from "components/RecommendationsCard.vue";
import {useQuasar} from "quasar";
import {computed} from "vue";

const $q = useQuasar()
const isMobile = computed(() => $q.platform.is.mobile)


</script>

<style scoped lang="scss">

</style>

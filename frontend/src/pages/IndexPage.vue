<template>
  <q-page>
    <div :class="!isMobile ? 'index-page' : 'mobile'">
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
.index-page {
  display: grid;
  grid-template-columns: 580px 280px;
  grid-gap: 20px;

  @media (max-width: 1250px) {
    grid-template-columns: 2.07fr 1fr;
  }
}
.mobile {
  padding-bottom: 150px;
}
</style>

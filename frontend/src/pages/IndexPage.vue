<template>
  <q-page>
    <div style="display: grid; grid-template-columns: 580px 280px; grid-gap: 20px">
      <div>
        <company-card class="full-width" />
        <feed-list class="q-mt-lg" />
      </div>
      <recommendations-card />
    </div>
  </q-page>
</template>

<script setup lang="ts">

import CompanyCard from 'components/company/CompanyCard.vue';
import FeedList from "components/feed/FeedList.vue";
import RecommendationsCard from "components/RecommendationsCard.vue";
</script>

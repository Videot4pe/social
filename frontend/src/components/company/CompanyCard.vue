<template>
  <styled-card class="relative-position">
<!--    <q-btn icon="mdi-arrow-left" round color="transparent" class="company-card__arrow" style="z-index: 1"/>-->
    <q-img v-if="isMobile" style="border-radius: 0 0 10px 10px" height="180px" src="~/assets/company-mobile.svg" />
    <q-img v-else style="border-radius: 10px" height="180px" src="~/assets/company.svg" />
    <div class="q-px-md q-py-lg">
      <company-info class="q-mb-md" />
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
      </div>
    </div>
  </styled-card>
</template>

<script setup lang="ts">

import StyledCard from "components/common/StyledCard.vue";
import CompanyInfo from "components/company/CompanyInfo.vue";
import {useQuasar} from "quasar";
import {computed} from "vue";

const $q = useQuasar()
const isMobile = computed(() => $q.platform.is.mobile)

</script>

<style lang="scss" scoped>
  .company-card {
    &__arrow {
      position: absolute;
      left: 20px;
      top: 20px;
    }
  }
  .text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #242529;
  }
</style>

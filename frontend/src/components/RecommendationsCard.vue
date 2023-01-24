<template>
  <styled-card class="recommendations q-px-md q-pt-md q-mb-md">
    <div class="flex justify-between full-width">
      <div class="recommendations__title">Recommendations</div>
      <styled-card v-for="recommendation in recommendations" :key="recommendation.id" class="recommendations__block full-width q-my-sm q-pa-md">
        <div style="height: 38px" />
        <div class="flex">
          <q-avatar style="outline: 2px solid #FFFFFF;" size="60px">
            <q-img width="60px" height="60px" src="~/assets/company.svg" />
          </q-avatar>
          <div class="self-center q-ml-md">
            <div class="recommendations__block--name">{{ recommendation.name }}</div>
            <div class="recommendations__block--link">{{ recommendation.link }}</div>
          </div>
        </div>
      </styled-card>
    </div>
  </styled-card>
</template>

<script setup lang="ts">
import StyledCard from 'components/common/StyledCard.vue';

const recommendations = [
  {
    id: 1,
    name: 'Test name',
    link: '@test'
  },
  {
    id: 2,
    name: 'Test name',
    link: '@test'
  },
  {
    id: 3,
    name: 'Test name',
    link: '@test'
  }
]
</script>

<style lang="scss" scoped>
  .recommendations {

    &__block {
      background-color: #C4BFD0;

      &--name {
        font-weight: 600;
        font-size: 16px;
        color: #FFFFFF;
      }

      &--link {
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
      }
    }

    &__title {
      font-weight: 600;
      font-size: 16px;
      color: #8A96A3;
    }
  }
</style>

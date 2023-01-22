<template>
  <q-layout v-if="isMobile">
    <q-page-container style="background-color: #F1EEF9">
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="300"
        class="bg-grey-3 z-top"
      >
        <q-scroll-area style="background-color: #322F39" class="fit">
          <side-bar style="margin: 80px 10px" />
        </q-scroll-area>
      </q-drawer>
      <q-btn
        icon="menu"
        round
        color="transparent"
        text-color="grey-5"
        unelevated
        class="mobile-menu z-top"
        @click="drawer = !drawer"
      />
      <router-view />
    </q-page-container>
  </q-layout>
  <q-layout v-else view="lHh Lpr lFf">
    <q-header class="flex justify-center" style="background-color: #F1EEF9">
      <q-toolbar style="display: grid; grid-template-columns: 1fr 280px 580px 280px 1fr; grid-gap: 20px">
        <div style="grid-column: span 2" class="full-width flex justify-end">
          <div class="header__left flex justify-end">
            <q-avatar size="30">
              <q-img width="30px" height="30px" src="~/assets/company-logo.svg" />
            </q-avatar>
            <q-toolbar-title class="header__title self-center">
              Logotype
            </q-toolbar-title>
          </div>
        </div>
        <div class="header__middle flex">
          <styled-search class="self-center" />
          <q-icon class="self-center q-ml-sm" color="grey" size="md" name="mdi-bell-outline" />
        </div>
        <div class="header__right flex justify-end">
          <div class="header__right--text self-center q-mr-sm">Log in</div>
          <q-avatar size="30">
            <q-img width="30px" height="30px" src="~/assets/company-logo.svg" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container style="background-color: #F1EEF9">
      <div style="display: grid; grid-template-columns: 1fr 280px 880px 1fr; grid-gap: 20px">
        <div style="grid-column: span 2" class="full-width flex justify-end layout__left-area">
          <side-block class="q-pt-lg">
            <side-bar />
          </side-block>
        </div>
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import SideBlock from 'components/SideBlock.vue';
import RecommendationsCard from 'components/RecommendationsCard.vue';
import StyledSearch from 'components/common/StyledSearch.vue';
import {useQuasar} from 'quasar';
import {computed, ref} from 'vue';
import SideBar from "components/SideBar.vue";

const $q = useQuasar()
const isMobile = computed(() => $q.platform.is.mobile)

const drawer = ref(false)

</script>

<style lang="scss" scoped>
  .layout {
    &__left-area {
      background-color: #322F39;
      border-radius: 0 10px 0 0;
    }
  }

  .mobile-menu {
    position: absolute;
    right: 6px;
    top: 6px;
  }

  .header {
    &__title {
      font-weight: 600;
      font-size: 18px;
      color: #242529;
    }
    &__left {
      width: 280px;
    }
    &__middle {
      width: 580px;
    }
    &__right {
      width: 100%;

      &--text {
        font-weight: 600;
        font-size: 14px;
        color: #8A96A3;
      }
    }
  }
</style>

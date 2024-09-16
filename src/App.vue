<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
<style>
   @media screen and (min-width: 992px) {
    ion-card {
      width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
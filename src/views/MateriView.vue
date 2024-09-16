<script setup lang="ts">
import {
  IonPage,
  IonGrid,
  IonCol,
  IonHeader,
  IonButton,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonTitle,
  IonIcon,
  IonRow,
  IonCardSubtitle,
  IonContent,
} from "@ionic/vue";
import Materi from "../data/materi.json"
import { book, arrowForwardCircle, playCircle,bookmarksSharp } from "ionicons/icons";
import { navigate } from "@/utils";
</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-align-items-center">
        <ion-title class="ion-text-center">
          <ion-icon :icon="book"></ion-icon>
          MATERI PEMBELAJARAN
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col v-for="materi in Materi.materi" :key="materi.judul" size="12">
            <ion-card style="position: relative;">
              <ion-icon class="icon-pojok" :icon="bookmarksSharp"></ion-icon>
              <ion-card-header style="margin-top: 30px;">
                <ion-card-title>{{ materi.judul }}</ion-card-title>
                <ion-card-subtitle>{{ materi.subtitle }}</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                {{ materi.deskripsi }}
                <br>
                <ion-button @click="navigate($router,`/tabs/detail-materi/${Materi.materi.indexOf(materi)}`)" color="success">Mulai Materi</ion-button>
              
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-card-title {
  font-weight: bold;
  font-size: 20px;
}
ion-button {
  margin-top: 15px;
  font-weight:lighter
}
.icon-pojok {
    position: absolute; left: 10px; top: 10px; font-size: 24px; color: #3880ff;
}
</style>

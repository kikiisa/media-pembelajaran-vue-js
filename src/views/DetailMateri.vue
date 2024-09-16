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
import { useRoute } from "vue-router";
import dataMateri from "../data/materi.json";
import { navigate } from "@/utils";
const route = useRoute();
const id: number = parseInt(route.params.id as string, 10);
</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-align-items-center">
        <ion-title class="ion-text-center">
          Materi
          {{ dataMateri.materi[id].judul }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
            <ion-col size="12" size-md="12">
                <ion-card>
                    <img :src="dataMateri.materi[id].gambar" alt="" />
                    <ion-card-content>
                        <ion-card-title style="margin-bottom: 3px;">{{ dataMateri.materi[id].judul }}</ion-card-title>
                        {{ dataMateri.materi[id].content }}
                        <br>
                        <ion-button @click="navigate($router,'/tabs/materi')" color="success">
                            Kembali
                        </ion-button>
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

ion-card-content {
    text-align: justify;
}
</style>

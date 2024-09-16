<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-align-items-center">
        <ion-title class="ion-text-center">
          <ion-icon :icon="book"></ion-icon>
          MEDIA PEMBELAJARAN
        </ion-title>
      </ion-toolbar>
    </ion-header>
      <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title class="ion-text-center">Selamat Datang Di Media Pembelajaran, Ikuti Materi Dan Quiz Terbaru. 🚀</ion-card-title>
        </ion-card-header>
        <ion-card-content class="ion-text-center">
          Media Pembelajaran adalah platform yang menyajikan materi dan kuis yang membantu siswa dalam memahami pelajaran dengan lebih baik.
          <br>
          <ion-button  style="margin-top: 15px;" @click="navigate($router,'/tabs/materi')">Lihat Materi <ion-icon :icon="arrowForwardCircle"></ion-icon></ion-button>
        </ion-card-content>
      </ion-card>   
      <ion-card>
        <ion-card-header>
          <ion-card-title class="ion-text-center">Quiz</ion-card-title>
        </ion-card-header>
        <ion-card-content class="ion-text-center">
          Menguji kemampuanmu dalam berbagai mata pelajaran
          <br>
          
          <ion-button style="margin-top: 15px;">Mulai <ion-icon :icon="playCircle"></ion-icon></ion-button>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title class="ion-text-center">Games</ion-card-title>
        </ion-card-header>
        <ion-card-content class="ion-text-center">
          Menguji kemampuanmu dalam bermain games
          <br>
          <ion-button  style="margin-top: 15px;">Mulai <ion-icon :icon="playCircle"></ion-icon></ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
    
  </ion-page>
</template>
<script setup lang="ts">
import { navigate } from '@/utils';
import { IonPage, IonHeader,IonButton, IonToolbar,IonCard,IonCardHeader ,IonCardTitle,IonCardContent,IonTitle,IonIcon, IonContent } from '@ionic/vue';
import { book,arrowForwardCircle,playCircle } from 'ionicons/icons';
</script>
<style scoped>
  ion-card-title {
    font-weight: bold;
    font-size: 20px;
  }
 
</style>
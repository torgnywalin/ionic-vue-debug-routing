<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ folder }}</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ folder }}</ion-title>
        </ion-toolbar>
      </ion-header>
    

      <ion-list lines="full">
        <ion-list-header>
          <ion-label>Links</ion-label>
        </ion-list-header>
        <ion-item @click="navigate('/test')" router-direction="forward" :router-link="'/test'" lines="none" detail="true">
          <ion-label>Test</ion-label>
        </ion-item>
        <ion-item @click="navigate('/folder/page1')" router-direction="forward" :router-link="'/test'" lines="none" detail="true">
          <ion-label>Dynamic Page 1</ion-label>
        </ion-item>
        <ion-item @click="navigate('/folder/page2')" router-direction="forward" :router-link="'/test'" lines="none" detail="true">
          <ion-label>Dynamic Page 2</ion-label>
        </ion-item>
      </ion-list>

      <div id="container">
        <strong class="capitalize">{{ folder }}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonBackButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonLabel, IonListHeader } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, computed, watch } from 'vue';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonItem,
    IonList,
    IonLabel,
    IonListHeader,
  },
  setup() {
    const route = useRoute();
    const folder = ref(route.params.id || 'Inbox');
    const matchedFolder = computed(() => route.params.id);
    const router = useRouter();
    
    watch(matchedFolder, () => {
      folder.value = matchedFolder.value as string;
    })

    const navigate = (url: string) => {
      console.log(router)
      router.push(url);
    }
     
    return { folder, navigate }
  }
}
</script>

<style scoped>
ion-menu-button {
  color: var(--ion-color-primary);
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
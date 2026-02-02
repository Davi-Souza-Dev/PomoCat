import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJg0vtT1GR4P4uQ0Ig_gBoTCWxfniEVOs",
  authDomain: "pomodoro-37468.firebaseapp.com",
  projectId: "pomodoro-37468",
  storageBucket: "pomodoro-37468.firebasestorage.app",
  messagingSenderId: "26634546197",
  appId: "1:26634546197:web:39166e903a88ed5057f21c",
  measurementId: "G-5S0RZS0ZFL"
};

 
initializeApp(firebaseConfig);

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')



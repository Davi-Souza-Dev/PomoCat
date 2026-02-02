<script setup lang="ts">
import CentralIcon from '@/components/pomodoro/CentralIcon.vue'
import DialogCatalog from '@/components/pomodoro/DialogCatalog.vue'
import Timer from '@/components/pomodoro/Timer.vue'
import AppLayout from '@/layout/AppLayout.vue'
import { useTimerStore } from '@/stores/TimerStore'
import { ref } from 'vue'
const timerStore = useTimerStore()

</script>

<template>
  <AppLayout>
    <DialogCatalog/>
    <!-- <h1 class="font-extrabold" v-show="timerStore.timer.start == false">0 gatos descobertos hoje</h1> -->
    <Timer/>
  </AppLayout>
</template>

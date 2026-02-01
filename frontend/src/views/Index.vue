<script setup lang="ts">
import CentralIcon from '@/components/pomodoro/CentralIcon.vue'
import Timer from '@/components/pomodoro/Timer.vue'
import AppLayout from '@/layout/AppLayout.vue'
import { useTimerStore } from '@/stores/TimerStore'
import { ref } from 'vue'
const timerStore = useTimerStore()

</script>

<template>
  <AppLayout>
    <!-- <h1 class="font-extrabold" v-show="timerStore.timer.start == false">0 gatos descobertos hoje</h1> -->
    <Timer/>
  </AppLayout>
</template>

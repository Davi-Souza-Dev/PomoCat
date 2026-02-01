<script setup lang="ts">
import { PlayIcon, Settings, XIcon } from 'lucide-vue-next'
import Button from '../ui/button/Button.vue'
import { ButtonGroup } from '@/components/ui/button-group'
import { useTimerStore } from '@/stores/TimerStore'
import DialogConfig from './DialogConfig.vue'
import { ref } from 'vue'
import CentralIcon from './CentralIcon.vue'
import UnlockCard from './UnlockCard.vue'
const timerStore = useTimerStore()
const showDialogConfig = ref(false)
</script>

<template>
  <DialogConfig :open="showDialogConfig" @update:open="showDialogConfig = false" />
  <UnlockCard/>
  <!-- TIMER PARADO -->
  <div
    class="flex align-middle flex-col justify-center gap-5 items-center"
    v-if="timerStore.timer.start == false"
  >
    <CentralIcon />

    <h1 class="font-extrabold uppercase text-5xl">
      {{ String(timerStore.timer.min).padStart(2, '0') }}:{{
        String(timerStore.timer.sec).padStart(2, '0')
      }}
    </h1>

    <ButtonGroup>
      <Button class="w-30 border-2 border-primary-foreground" @click="timerStore.startTimer()"
        ><PlayIcon class="fill-foreground"
      /></Button>
      <Button class="w-10 border-2 border-foreground" @click="showDialogConfig = true"
        ><Settings
      /></Button>
    </ButtonGroup>
  </div>
  <!-- TIMER START -->
  <div v-else class="flex align-middle flex-col justify-center gap-5 items-center">
    <CentralIcon />

    <h1 class="font-extrabold uppercase text-5xl">
      {{ String(timerStore.timer.min).padStart(2, '0') }}:{{
        String(timerStore.timer.sec).padStart(2, '0')
      }}
    </h1>

    <ButtonGroup>
      <Button class="w-30 border-2 border-primary-foreground" @click="timerStore.startTimer()"
        ><XIcon class="fill-foreground"
      /></Button>
    </ButtonGroup>
  </div>
</template>

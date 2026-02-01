<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import DialogCatalog from '@/components/pomodoro/DialogCatalog.vue'
import Button from '@/components/ui/button/Button.vue'
import { useTimerStore } from '@/stores/TimerStore'
import { LucideBookOpen, MenuIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import { useCardStore } from '@/stores/CardStore'

const timerStore = useTimerStore()
const showDialogCatalog = ref(false)

const cardStore = useCardStore();

const showCatalog = async () =>{
  await cardStore.getCards();
  showDialogCatalog.value = !showDialogCatalog.value
}



</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full h-full p-5 flex flex-col gap-15 items-center justify-center align-middle">
      <DialogCatalog :open="showDialogCatalog" @update:open="showDialogCatalog = false" />
      <header class="w-full h-20 flex justify-between align-middle">
        <SidebarTrigger as-child v-if="timerStore.timer.start == false">
          <Button class="w-10 h-10 border-2 border-primary-foreground"><MenuIcon /></Button>
        </SidebarTrigger>
        <Button
          @click="showCatalog"
          class="w-10 h-10 border-2 border-primary-foreground"
          v-if="timerStore.timer.start == false"
          ><LucideBookOpen />
        </Button>
      </header>
      <section class="w-full flex flex-col justify-center align-middle items-center gap-3">
        <slot />
      </section>
    </main>
  </SidebarProvider>
</template>

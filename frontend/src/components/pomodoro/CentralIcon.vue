<script setup lang="ts">
import { useTimerStore } from '@/stores/TimerStore'
const timerStore = useTimerStore()

</script>

<template>
  <div
    v-if="timerStore.timer.start == false"
    class="rounded-full w-60 h-60 bg-primary flex align-middle items-center justify-center"
  >
    <div class="rounded-full w-55 h-55 bg-foreground flex align-middle items-center justify-center">
      <div class="rounded-full w-55 h-55 bg-gray-300 flex align-middle items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-primary w-30"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M14 9V3L11 4H8L5 3V9L9.5 11L14 9ZM14 9L20 12L22 18L20 21H4L2 19L4 17L2 15L4 13M7 21V9.88889M11 15V21L16.0435 16H18M8 7L8.00707 7.00707M11 7L11.0071 7.00707"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
  <div
    v-else
    class="rounded-full w-60 h-60 flex items-center justify-center"
    :style="{
      background: `linear-gradient(to top, var(--color-primary) ${timerStore.progress}%, #6a7282 ${timerStore.progress}%)`,
    }"
  >
    <div
      class="rounded-full w-55 h-55 flex items-center justify-center"
      :style="{
        background: `linear-gradient(to top, var(--color-foreground) ${timerStore.progress}%, #d1d5dc ${timerStore.progress}%)`,
      }"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-30 transition-all duration-500"
      >
        <defs>
          <linearGradient
            id="catProgressGradient"
            x1="0"
            x2="0"
            y1="24"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop :offset="`${timerStore.progress}%`" stop-color="var(--color-primary)" />
            <stop :offset="`${timerStore.progress}%`" stop-color="#9CA3AF" />
          </linearGradient>
        </defs>

        <g id="SVGRepo_iconCarrier">
          <path
            d="M14 9V3L11 4H8L5 3V9L9.5 11L14 9ZM14 9L20 12L22 18L20 21H4L2 19L4 17L2 15L4 13M7 21V9.88889M11 15V21L16.0435 16H18M8 7L8.00707 7.00707M11 7L11.0071 7.00707"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            :stroke="
              timerStore.progress >= 100 ? 'var(--color-primary)' : 'url(#catProgressGradient)'
            "
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>

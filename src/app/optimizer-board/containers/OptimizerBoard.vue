<script setup lang="ts">
import { ref, toRaw } from 'vue'
import { computed } from '@vue/reactivity'

import MarketSentiment from './../components/MarketSentiment.vue'
import Divergency from './../components/Divergency.vue'
import Pattern from './../components/Pattern.vue'
import PatternBreakout from './../components/PatternBreakout.vue'
import Pullback from './../components/Pullback.vue'
import { ActionType } from './../../shared/enums/action-type.enum'
import BaseProgressBar from '../../shared/components/BaseProgressBar.vue'

const globalList = ref(new Map<ActionType, number>())
const percentageByType = computed(() => {
  const percentage = new Map<ActionType, number>([
    [ActionType.Buy, 0],
    [ActionType.Sell, 0]
  ])
  if (globalList.value.has(ActionType.Buy) || globalList.value.has(ActionType.Sell)) {
    const total = Array.from(toRaw(globalList.value).values()).reduce((acc, val) => acc + val, 0)
    if (globalList.value.has(ActionType.Buy)) {
      percentage.set(ActionType.Buy, ((globalList.value.get(ActionType.Buy) || 0) * 100) / total)
    }
    if (globalList.value.has(ActionType.Sell)) {
      percentage.set(ActionType.Sell, ((globalList.value.get(ActionType.Sell) || 0) * 100) / total)
    }
  }
  return percentage
})

function update(val: number, type: ActionType): void {
  if (globalList.value.has(type)) {
    globalList.value.set(type, (globalList.value.get(type) || 0) + val)
  } else {
    globalList.value.set(type, val);
  }
  // Remove
  console.log('Event -> ', (globalList.value.get(type) || 0));
}

</script>

<template>
  <BaseProgressBar :percentage-by-type="percentageByType" />
  <div class="row row-cols-1 row-cols-md-1 mb-2 text-center">
    <MarketSentiment msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
  <div class="row row-cols-1 row-cols-md-2 mb-2 text-center">
    <Divergency msg="Hello Vue 3 + TypeScript + Vite" />
    <Pattern @value="update" />
  </div>
  <div class="row row-cols-1 row-cols-md-2 mb-2 text-center">
    <PatternBreakout msg="Hello Vue 3 + TypeScript + Vite" />
    <Pullback msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>
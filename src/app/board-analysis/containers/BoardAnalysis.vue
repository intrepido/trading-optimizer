<script setup lang="ts">
import { ref, toRaw } from 'vue'
import { computed } from '@vue/reactivity'

import MarketSentiment from '../components/MarketSentiment.vue'
import Divergency from '../components/Divergency.vue'
import Pattern from '../components/Pattern.vue'
import { ActionType } from '../../shared/enums/action-type.enum'
import BaseProgressBar from '../../shared/components/BaseProgressBar.vue'
import { ValueType } from './../../shared/models/value-type.model';
import Operations from '../components/Operations.vue'

const globalList = ref(new Map<ActionType, number>())
const percentageByType = computed((): Map<ActionType, number> => {
  const percentage = new Map<ActionType, number>([
    [ActionType.Buy, 0],
    [ActionType.Sell, 0]
  ])
  if (globalList.value.has(ActionType.Buy) || globalList.value.has(ActionType.Sell)) {
    const total = calculateTotal()
    if (globalList.value.has(ActionType.Buy)) {
      percentage.set(ActionType.Buy, calculatePercentageByType(ActionType.Buy, total))
    }
    if (globalList.value.has(ActionType.Sell)) {
      percentage.set(ActionType.Sell, calculatePercentageByType(ActionType.Sell, total))
    }
  }
  return percentage
})

function calculateTotal(): number {
  return Array.from(toRaw(globalList.value).values()).reduce((acc, val) => acc + val, 0)
}

function calculatePercentageByType(type: ActionType, total: number): number {
  const num = ((globalList.value.get(type) || 0) * 100)
  return num ? Number((num / total).toFixed()) : 0
}

function update(valueType: ValueType): void {
  if (globalList.value.has(valueType.type)) {
    globalList.value.set(valueType.type, (globalList.value.get(valueType.type) || 0) + valueType.value)
  } else {
    globalList.value.set(valueType.type, valueType.value);
  }
  console.log("Global List", globalList.value);

}
</script>

<template>
  <BaseProgressBar :percentage-by-type="percentageByType" />
  <div class="row row-cols-1 row-cols-md-1 mb-2 text-center">
    <MarketSentiment @value="update" />
  </div>
  <div class="row row-cols-1 row-cols-md-1 mb-1 text-center">
    <Pattern @value="update" />
  </div>
  <div class="row row-cols-1 row-cols-md-1 mb-1 text-center">
    <Divergency @value="update" />
  </div>
  <div class="row row-cols-1 row-cols-md-1 mb-1 text-center">
    <Operations @value="update"></Operations>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { ActionType as AT } from './../main/enums/action-type.enum'
import { PatternsWeight as PW } from './../main/enums/indicators-weight.enum'

defineProps<{ msg: string }>()

const selectionList = ref(new Map<AT, number>())
const descTriangule = ref(PW.DescTrianguleDowntrend)
const descTrianguleCheck = ref(false)
const ascTriangule = ref(PW.AscTrianguleUptrend)

/* function clearAll() {
  const [y, m, d] = 'str'.split('-')
  return new Date(+y, m - 1, +d)
} */

function add(event: Event, type: AT, value: number): void {
  let total
  if (selectionList.value.has(type)) {
    if (event.target?.checked) {
      total = (selectionList.value.get(type) || 0) + value
    } else {
      total = (selectionList.value.get(type) || 0) - value
    }
  } else {
    total = value
  }
  selectionList.value.set(type, total)
  console.log('SelectionList', selectionList.value);
}

</script>

<template>

</template>

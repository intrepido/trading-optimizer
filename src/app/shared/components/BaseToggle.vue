<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'

import { ValueType } from '../models/value-type.model';
import { shortUniqueId } from '../utils/utils';
import { WeightMultipleOption } from '../models/weight-multiple-option.model';
import BaseCheckbox from './BaseCheckbox.vue';
import { ElementType } from '../enums/element-type.enum';
import { Alignment } from '../enums/alignment.enum';
import { ActionType } from '../enums/action-type.enum';

const props = defineProps<{
  weightMultipleOption: WeightMultipleOption,
  reset: boolean,
  style?: {
    alignment?: Alignment,
    behavior?: ElementType.Radio | ElementType.RadioCheck | ElementType.Checkbox
  }
}>()
const emit = defineEmits<{
  (e: 'value', val: ValueType): void
}>()
const id = ref('')
const optionsReset = ref(new Map<ActionType, boolean>())

onMounted(() => {
  id.value = shortUniqueId()
  props.weightMultipleOption.options.forEach(option => optionsReset.value.set(option.type, false))
})

watch(() => props.reset, (current, prev) => {
  if (current) {
    resetOptionsStatus()
  }
})

async function switchReset(map: Map<ActionType, boolean>, type: ActionType) {
  map.set(type, true)
  await nextTick(() => {
    map.set(type, false)
  })
}

function resetOptionsStatus(excludeType?: ActionType) {
  optionsReset.value.forEach((val, type, map) => {
    if (type !== excludeType) {
      switchReset(map, type)
    }
  });
}

function update(valueType: ValueType): void {
  if ((props.style?.behavior === ElementType.RadioCheck) && valueType.value > 0) {
    resetOptionsStatus(valueType.type)
  }
  emit('value', valueType)
}
</script>

<template>
  <div :class="props.style?.alignment === Alignment.Vertical ? 'd-grid' : ''" class="btn-group btn-group-sm w-100"
    role="group">
    <template v-for="option in props.weightMultipleOption.options">
      <BaseCheckbox :reset="optionsReset.get(option.type) || false"
        :weight-option="{ weight: props.weightMultipleOption.weight, option }" :style="{
          isUnwrapped: option?.style?.isUnwrapped
        }" @value="update" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import { ValueType } from './../../shared/models/value-type.model';
import { WeightOption } from '../models/weight-option.model';

const props = defineProps<{
  reset: boolean,
  weightOptions: WeightOption[],
}>()
const emit = defineEmits<{
  (e: 'value', val: ValueType): void
}>()
const isChecked = ref(false)
const prevWeight = ref(0)
const selectedValue = ref()

onMounted(() => {
  if (props.weightOptions.length && props.weightOptions[0]?.weight !== null) {
    selectedValue.value = props.weightOptions[0]
  }
})

watch(() => props.reset, (current, prev) => {
  if (isChecked.value && current) {
    isChecked.value = !current
    update()
  }
})

function update(): void {
  let weight = 0
  if (isChecked.value) {
    if (prevWeight.value !== 0) {
      weight = selectedValue.value.weight - prevWeight.value
    } else {
      weight = selectedValue.value.weight
    }
    prevWeight.value = selectedValue.value.weight
    emit('value', { value: weight, type: selectedValue.value.option.type } as ValueType)
  } else {
    emit('value', { value: -prevWeight.value, type: selectedValue.value.option.type } as ValueType)
    prevWeight.value = weight
  }
}

function updateIfChecked(): void {
  if (isChecked.value) {
    update()
  }
}
</script>

<template>
  <div class="input-group mb-1">
    <div class="input-group-text">
      <input @change="update" v-model="isChecked" class="form-check-input mt-0" type="checkbox" value="">
    </div>
    <select @change="updateIfChecked" v-model="selectedValue" class="form-select">
      <option v-for="weightOption in props.weightOptions" :key="weightOption.option.id"
        :value="weightOption">
        {{ weightOption.option.name }}
      </option>
    </select>
  </div>
</template>

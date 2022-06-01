<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import { WeightOption } from '../models/weight-option.model';
import { ValueType } from '../models/value-type.model';
import { shortUniqueId } from '../utils/utils';

const props = defineProps<{
  weightOption: WeightOption,
  reset: boolean,
  groupName: string,
  selectedValue: string,
  style?: {
    disabled?: boolean
  }
}>()
const emit = defineEmits<{
  (e: 'value', val: ValueType): void
}>()
const id = ref('')

onMounted(() => {
  id.value = shortUniqueId()
})

watch(() => props.reset, (current, prev) => {
  if (current && props.weightOption?.option?.default) {
    update()
  }
})

function update(): void {
  emit('value', { value: props.weightOption.weight, type: props.weightOption.option.type } as ValueType)
} 
</script>

<template>
  <div class="form-check">
    <input v-model="selectedValue" @change="update" :value="props.weightOption?.option?.type || ''" class="form-check-input"
      :id="props.weightOption?.option.id + id" :name="groupName" :checked="props.weightOption?.option?.default" :disabled="props?.style?.disabled"
      type="radio" />
    <label class="form-check-label" :for="props.weightOption?.option.id + id">
      {{ props.weightOption?.option?.name }}
    </label>
  </div>
</template>

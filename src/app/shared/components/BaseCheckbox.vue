<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import { shortUniqueId } from '../utils/utils';
import { ValueType } from '../models/value-type.model';
import { WeightOption } from '../models/weight-option.model';
import { vUnwrap } from '../directives/v-unwrap.directive';
import { ElementType } from '../enums/element-type.enum';

const props = defineProps<{
  reset: boolean,
  weightOption: WeightOption,
  style?: { isUnwrapped?: boolean }
}>()
const emit = defineEmits<{
  (e: 'value', val: ValueType): void
}>()
const id = ref('')
const isChecked = ref(false)

onMounted(() => {
  isChecked.value = props.reset
  id.value = shortUniqueId()
})

watch(() => props.reset, (current, prev) => {
  if (isChecked.value && current) {
    isChecked.value = !current
    update()
  }
})

function update(): void {
  if (props.weightOption?.option?.type) {
    const weight = props.weightOption.weight
    emit('value', { value: isChecked.value ? weight : -weight, type: props.weightOption.option.type } as ValueType)
  }
}
</script>

<template>
  <div v-unwrap="!!props.style?.isUnwrapped" class="form-check">
    <input v-model="isChecked" @change="update"
      :class="weightOption.option?.style?.type === ElementType.Button ? 'btn-check' : 'form-check-input'"
      :id="props.weightOption?.option.id + id" type="checkbox" />
    <label
      :class="weightOption.option.style?.type === ElementType.Button ? 'btn ' + weightOption.option.style?.class : 'form-check-label'"
      :for="props.weightOption?.option.id + id">
      {{ props.weightOption?.option?.name }}
    </label>
  </div>
</template>

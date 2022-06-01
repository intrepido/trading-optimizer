<script setup lang="ts">
import { ref, onMounted, h } from 'vue'

import { ValueType } from '../models/value-type.model';
import { shortUniqueId } from '../utils/utils';
import { Option } from '../models/option.model';
import { Weight } from '../enums/weights.enum'
import BaseRadioButton from './BaseRadioButton.vue'

const props = defineProps<{
  weight: Weight,
  options: Option[],
  reset: boolean,
  groupName: string, 
  style: { wrapperTag: string, disabled?: boolean }
}>()
const emit = defineEmits<{
  (e: 'value', val: ValueType): void
}>()
const id = ref('')
const selectedValue = ref('')

onMounted(() => {
  id.value = shortUniqueId()

})

function update(valueType: ValueType): void {
  if (selectedValue.value) {
    emit('value', { value: -props.weight, type: selectedValue.value } as ValueType)
  }
  if (valueType?.type) {
    emit('value', { value: props.weight, type: valueType?.type } as ValueType)
  }
  selectedValue.value = valueType?.type || ''
}

function render() {
  return props.options.map(option => {
    return h(props.style.wrapperTag, { key: option.id + id.value },
      h(BaseRadioButton, {
        ['weight-option']: { weight: props.weight, option },
        reset: props.reset,
        ['group-name']: props.groupName,
        ['selected-value']: selectedValue.value,
        ['style']: { disabled: props.style.disabled },
        onValue(event: ValueType) {
          update(event)
        }
      })
    )
  })
}
</script>

<template>
  <render />
  <!-- <td v-for="option in props.options" :key="option.id + id">
    <BaseRadioButton2 :weight-option="{ weight: props.weight, option }" :reset="reset" @value="update" :group-name="id"
      :selected-value="selectedValue" />
  </td> -->
</template>


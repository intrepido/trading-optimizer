<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { WeightDescriptor } from '../models/weight-descriptor.model';

const props = defineProps<{ weightDescriptors: WeightDescriptor[] }>()
const emit = defineEmits<{
  (e: 'value', val: number): void
}>()
const isChecked = ref(false)
const prevSelectedValue = ref(0)
const selectedValue = ref()

onMounted(() => {
  if (props.weightDescriptors.length && props.weightDescriptors[0]?.weight !== null) {
    selectedValue.value = props.weightDescriptors[0].weight
  }
})

function update(): void {
  let val = 0
  if (isChecked.value) {
    if (prevSelectedValue.value !== 0) {
      val = selectedValue.value - prevSelectedValue.value
    } else {
      val = selectedValue.value
    }
    prevSelectedValue.value = selectedValue.value
    emit('value', val)
  } else {
    emit('value', -prevSelectedValue.value)
    prevSelectedValue.value = val
  }
}

function updateIfChecked(): void {
  if (isChecked.value) {
    update()
  }
}
</script>

<template>
  <div class="input-group mb-3">
    <div class="input-group-text">
      <input @change="update" v-model="isChecked" class="form-check-input mt-0" type="checkbox" value="">
    </div>
    <select @change="updateIfChecked" v-model="selectedValue" class="form-select">
      <option v-for="weightDescriptor in props.weightDescriptors" :key="weightDescriptor.id"
        :value="weightDescriptor.weight">
        {{ weightDescriptor.name }}
      </option>
    </select>
  </div>
</template>

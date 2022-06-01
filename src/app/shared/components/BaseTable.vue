<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { ValueType } from '../models/value-type.model'
import { shortUniqueId } from '../utils/utils'
import { ElementType } from '../enums/element-type.enum'
import { TagType } from '../enums/tag-type.enum'
import BaseCheckbox from './BaseCheckbox.vue'
import BaseToggle from './BaseToggle.vue'
import { Table } from '../models/table.model'
import BaseRadioButtonGroup from './BaseRadioButtonGroup.vue'

const props = defineProps<{
  model: Table,
  reset: boolean,
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

function update(valueType: ValueType): void {
  emit('value', valueType)
}
</script>

<template>
  <div class="row">
    <div class="col">
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <th scope="col" class="w-100"></th>
              <th v-for="header in props?.model?.headers" :key="header + id" scope="col" class="text-nowrap">{{ header
              }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in props?.model?.rows" :key="i + id">
              <td>
                {{ row.description }}
              </td>
              <template v-if="[ElementType.Toggle, ElementType.Checkbox].includes(props?.model.columnType.type)">
                <td v-for="(column, i) in row.columns" :key="column + id">
                  <template v-if="props?.model.columnType.type === ElementType.Checkbox">
                    <BaseCheckbox :weight-option="{
                      weight: column.weight,
                      option: column.options[0]
                    }" :reset="reset" @value="update" />
                  </template>
                  <template v-if="props?.model.columnType.type === ElementType.Toggle">
                    <BaseToggle :weight-multiple-option="{
                      weight: column.weight,
                      options: column.options.map(x => x)
                    }" :reset="reset" :style="{
  alignment: props?.model.columnType.alignment,
  behavior: props?.model.columnType.behavior
}" @value="update">
                    </BaseToggle>
                  </template>
                </td>
              </template>
              <template v-if="props?.model.columnType.type === ElementType.Radio">
                <BaseRadioButtonGroup :weight="row.columns[0].weight"
                  :options="Array.from(row.columns.map(x => x.options), x => x[0])"
                  :group-name="i + id"
                  :style="{ wrapperTag: TagType.TD, disabled: style?.disabled }" :reset="reset" @value="update" />
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

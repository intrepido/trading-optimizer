<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { ValueType } from '../models/value-type.model'
import { shortUniqueId } from '../utils/utils'
import { ElementType } from '../enums/element-type.enum'
import { TagType } from '../enums/tag-type.enum'
import { TableType } from '../enums/table-type.enum'
import BaseCheckbox from './BaseCheckbox.vue'
import BaseToggle from './BaseToggle.vue'
import type {
  TableAsymmetricColumns, TableSymmetricColumns,
  RowSymmetricColumns, RowAsymmetricColumns
} from '../models/table.model'
import BaseRadioButtonGroup from './BaseRadioButtonGroup.vue'

const props = defineProps<{
  model: TableSymmetricColumns | TableAsymmetricColumns,
  reset: boolean
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
              <template
                v-if="props.model.type === TableType.TableSymmetricColumns && [ElementType.Toggle, ElementType.Checkbox].includes(props?.model.columnType.type)">
                <td v-for="headerWeight in (row as RowSymmetricColumns).headerWeights" :key="headerWeight + id">
                  <template v-if="props?.model.columnType.type === ElementType.Toggle">
                    <BaseToggle
                      :weight-multiple-option="{ weight: headerWeight, options: (row as RowSymmetricColumns).options }"
                      :reset="reset" :style="{
                        alignment: props?.model.columnType.alignment,
                        behavior: props?.model.columnType.behavior
                      }" @value="update"></BaseToggle>
                  </template>
                  <template
                    v-else="props?.tableOption.columnType.type === ElementType.Checkbox && (row as RowSymmetricColumns).options.length === 1">
                    <BaseCheckbox
                      :weight-option="{ weight: headerWeight, option: (row as RowSymmetricColumns).options[0] }"
                      :reset="reset" @value="update" />
                  </template>
                </td>
              </template>
              <template
                v-if="props.model.type === TableType.TableAsymmetricColumns && [ElementType.Radio, ElementType.Checkbox].includes(props?.model.columnType.type)">
                <template v-if="props?.model.columnType.type === ElementType.Radio">
                  <BaseRadioButtonGroup :weight="(row as RowAsymmetricColumns).headerWeightOptions.weight"
                    :options="(row as RowAsymmetricColumns).headerWeightOptions.options"
                    :style="{ groupName: i + id, wrapperTag: TagType.TD }" :reset="reset" @value="update" />
                </template>
                <template v-if="props?.model.columnType.type === ElementType.Checkbox">
                  <td v-for="(option, i) in (row as RowAsymmetricColumns).headerWeightOptions.options"
                    :key="option.id + id">
                    <BaseCheckbox :weight-option="{
                      weight: (row as RowAsymmetricColumns).headerWeightOptions.weight,
                      option: (row as RowAsymmetricColumns).headerWeightOptions.options[i]
                    }" :reset="reset" @value="update" />
                  </td>
                </template>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

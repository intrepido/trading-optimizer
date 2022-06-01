<script setup lang="ts">
import { ref, nextTick, onMounted, Ref } from 'vue'
import { ValueType } from './../../shared/models/value-type.model'
import { appConstants } from './../../shared/utils/app.contants'
import BaseTable from '../../shared/components/BaseTable.vue';
import BaseToggle from '../../shared/components/BaseToggle.vue';
import { Table } from '../../shared/models/table.model';
import { ActionType } from '../../shared/enums/action-type.enum';

enum Component {
  PullbackToggle = 'PullbackToggle',
  Pullback = 'Pullback',
  BreakoutToggle = 'BreakoutToggle',
  Breakout = 'Breakout'
}
const resetComponents = ref(new Map<Component, boolean>())
const disabledComponents = ref(new Map<Component, boolean>())
const togglesOptionSelected = ref(new Map<Component, ValueType>())
const pullbackModel = ref()
const emit = defineEmits<{
  (e: 'value', val: ValueType): void
}>()

onMounted(() => {
  pullbackModel.value = appConstants.weight.operations.pullback
})

async function switchReset(type: Component) {
  resetComponents.value.set(type, true)
  await nextTick(() => {
    resetComponents.value.set(type, false)
  })
}

function clearAll() {
  Object.keys(Component).forEach(type => switchReset(type as Component))
}

function update(valueType: ValueType): void {
  emit('value', valueType)
}

function switchModelTypes(valueType: ValueType, model: Table, component: Component): void {
  if (valueType.value > 0) {
    togglesOptionSelected.value.set(component, valueType)
    model.rows = model.rows.map(row => ({
      ...row,
      columns: row.columns.map((column, i) => ({
        ...column,
        options: i < 2 ? column.options.map(option => ({
          ...option,
          type: i == 0 ? valueType.type : (valueType.type === ActionType.Buy ? ActionType.Sell : ActionType.Buy)
        })) : column.options
      }))
    }))
    switchReset(component)
    disabledComponents.value.set(component, false)
  } else if (togglesOptionSelected.value.get(component)?.type === valueType.type) {
    switchReset(component)
    disabledComponents.value.set(component, true)
  }
}
</script>

<template>
  <div class="accordion" id="accordionOperations">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOperations"
          aria-expanded="true" aria-controls="collapseOperations">
          <h4 class="my-0 fw-normal text-center">Operations</h4>
        </button>
      </h2>
      <div id="collapseOperations" class="accordion-collapse collapse show" aria-labelledby="headingOneOperations"
        data-bs-parent="#accordionOperations">
        <div class="accordion-body">
          <div class="row row-cols-1 row-cols-md-1 mb-1">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-body d-grid gap-3 text-start">
                  <div class="row">
                    <div class="col-8">
                      <h5 class="card-title">Breakout / Pullback</h5>
                    </div>
                    <div class="col">
                      <BaseToggle :weight-multiple-option="{
                        weight: 1,
                        options: appConstants.toggleActionType.options
                      }" :reset="resetComponents.get(Component.PullbackToggle) || false" :style="{
  alignment: appConstants.toggleActionType.alignment,
  behavior: appConstants.toggleActionType.behavior
}" @value="switchModelTypes($event, pullbackModel, Component.Pullback)">
                      </BaseToggle>
                    </div>
                  </div>
                  <BaseTable :model="pullbackModel" :reset="resetComponents.get(Component.Pullback) || false"
                    :style="{ disabled: disabledComponents.get(Component.Pullback) ?? true }" @value="update">
                  </BaseTable>
                </div>
              </div>
            </div>
          </div>
          <div class="text-end">
            <button @click="clearAll" type="button" class="btn btn-outline-danger btn-sm">Clear All</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

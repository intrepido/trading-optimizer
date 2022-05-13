<script setup lang="ts">
import { ref } from 'vue'
import BaseDropdownCheck from '../../shared/components/BaseDropdownCheck.vue'
import { ActionType } from './../../shared/enums/action-type.enum'
import { WeightPattern } from './../../shared/enums/weights.enum'
import { appConstants } from './../../shared/utils/app.contants'

const emit = defineEmits<{
  (e: 'value', val: number, type: ActionType): void
}>()

/* function clearAll() {
  const [y, m, d] = 'str'.split('-')
  return new Date(+y, m - 1, +d)
} */

function add(event: Event, type: ActionType, value: number): void {
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

function update(val: number, type: ActionType): void {
  emit('value', val, type)
}

</script>

<template>

  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">Patterns</h4>
      </div>
      <div class="card-body d-grid text-start">

        <div class="row row-cols-2 row-cols-md-2 mb-2">
          <div class="col d-grid gap-3">
            <h5 class="card-title">Buy</h5>
            <BaseDropdownCheck :weight-descriptors="appConstants.weight.pattern.descTriangule"
              @value="update($event, ActionType.Sell)" />
            <div class="form-check">
              <input @change="add($event, ActionType.Buy, WeightPattern.InverseHeadAndShoulders)"
                class="form-check-input" type="checkbox" value="" id="flexCheckInverseHeadShoulders" />
              <label class="form-check-label" for="flexCheckInverseHeadShoulders">
                Inverse Head and shoulders
              </label>
            </div>
            <div class="form-check">
              <input @change="add($event, ActionType.Buy, WeightPattern.DoubleBottom)" class="form-check-input"
                type="checkbox" value="" id="flexCheckDobleBottom" />
              <label class="form-check-label" for="flexCheckDobleBottom">
                Doble bottom
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckSymetricalTriangule" />
              <label class="form-check-label" for="flexCheckSymetricalTriangule">
                Symetrical Triangule
              </label>
            </div>

          </div>
          <div class="col d-grid gap-3">
            <h5 class="card-title">Sell</h5>
            <BaseDropdownCheck :weight-descriptors="appConstants.weight.pattern.ascTriangule"
              @value="update($event, ActionType.Buy)" />
            <div class="form-check">
              <input @change="add($event, ActionType.Sell, WeightPattern.HeadAndShoulders)" class="form-check-input"
                type="checkbox" value="" id="flexCheckHeadShoulders" />
              <label class="form-check-label" for="flexCheckHeadShoulders">
                Head and shoulders
              </label>
            </div>
            <div class="form-check">
              <input @change="add($event, ActionType.Sell, WeightPattern.DoubleTop)" class="form-check-input"
                type="checkbox" value="" id="flexCheckDobleTop" />
              <label class="form-check-label" for="flexCheckDobleTop">
                Doble top
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDescendingTriangule" />
              <label class="form-check-label" for="flexCheckDescendingTriangule">
                Descending Triangule
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexChecParallelChannel" />
              <label class="form-check-label" for="flexChecParallelChannel">
                Parallel Channel
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexChecHorizontalChannel" />
              <label class="form-check-label" for="flexChecHorizontalChannel">
                Horizontal Channel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

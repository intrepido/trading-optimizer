<script setup lang="ts">
import { ref, nextTick } from 'vue'

import BaseDropdownCheck from '../../shared/components/BaseDropdownCheck.vue'
import BaseCheckbox from '../../shared/components/BaseCheckbox.vue'
import { appConstants } from './../../shared/utils/app.contants'
import { ValueType } from './../../shared/models/value-type.model'

const reset = ref(false)
const emit = defineEmits<{
  (e: 'value', val: ValueType): void
}>()

async function clearAll() {
  reset.value = true
  await nextTick(() => {
    reset.value = false
  })
}

function update(valueType: ValueType): void {
  emit('value', valueType)
}
</script>

<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="true" aria-controls="collapseOne">
          <h4 class="my-0 fw-normal text-center">Patterns</h4>
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="row row-cols-1 row-cols-md-2 mb-2">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-body d-grid text-start">
                  <div class="col d-grid gap-3">
                    <h5 class="card-title">Bullish</h5>
                    <BaseDropdownCheck :reset="reset" :weight-options="appConstants.weight.pattern.ascTriangule"
                      @value="update" />
                    <BaseCheckbox :reset="reset" :weight-option="appConstants.weight.pattern.parallelChannelUptrend"
                      @value="update" />
                    <BaseCheckbox :reset="reset" :weight-option="appConstants.weight.pattern.invHeadsAndShoulders"
                      @value="update" />
                    <BaseCheckbox :reset="reset" :weight-option="appConstants.weight.pattern.doubleBottom"
                      @value="update" />
                    <BaseCheckbox :reset="reset" :weight-option="appConstants.weight.pattern.symetricalTrianguleUptrend"
                      @value="update" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-body d-grid text-start">
                  <div class="col d-grid gap-3">
                    <h5 class="card-title">Bearish</h5>
                    <BaseDropdownCheck :reset="reset" :weight-options="appConstants.weight.pattern.descTriangule"
                      @value="update" />
                    <BaseCheckbox :reset="reset" :weight-option="appConstants.weight.pattern.parallelChannelDowntrend"
                      @value="update" />
                    <BaseCheckbox :reset="reset" :weight-option="appConstants.weight.pattern.headsAndShoulders"
                      @value="update" />
                    <BaseCheckbox :reset="reset" :weight-option="appConstants.weight.pattern.doubleTop"
                      @value="update" />
                    <BaseCheckbox :reset="reset"
                      :weight-option="appConstants.weight.pattern.symetricalTrianguleDowntrend" @value="update" />
                  </div>
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

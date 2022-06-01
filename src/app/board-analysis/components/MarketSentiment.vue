<script setup lang="ts">
import { ref, nextTick } from 'vue'

import { appConstants } from './../../shared/utils/app.contants'
import { ValueType } from './../../shared/models/value-type.model'
import BaseTable from '../../shared/components/BaseTable.vue'

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
  <div class="accordion" id="accordionMarketSentiment">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseMarketSentiment" aria-expanded="true" aria-controls="collapseMarketSentiment">
          <h4 class="my-0 fw-normal text-center">Market Sentiment</h4>
        </button>
      </h2>
      <div id="collapseMarketSentiment" class="accordion-collapse collapse show"
        aria-labelledby="headingOneMarketSentiment" data-bs-parent="#accordionMarketSentiment">
        <div class="accordion-body">
          <div class="row row-cols-1 row-cols-md-1 mb-2">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-body d-grid text-start">
                  <div class="col d-grid gap-3">
                    <h5 class="card-title">Macro Trend</h5>
                    <BaseTable :model="appConstants.weight.marketSentiment.macroTrend" :reset="reset" @value="update">
                    </BaseTable>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-body d-grid text-start">
                  <div class="col d-grid gap-3">
                    <h5 class="card-title">Immediate Trend</h5>
                     <BaseTable :model="appConstants.weight.marketSentiment.immediateTrend" :reset="reset"
                      @value="update"></BaseTable>
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

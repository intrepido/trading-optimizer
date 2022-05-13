<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>

  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">Divergencies</h4>
      </div>
      <div class="card-body d-grid gap-3 text-start">
        <h5 class="card-title">Buy</h5>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckStochasticsRSIBuy" />
          <label class="form-check-label" for="flexCheckStochasticsRSIBuy">
            Stochastics and RSI buy signal
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckCDVSellAbsorption" checked />
          <label class="form-check-label" for="flexCheckCDVSellAbsorption">
            CDV sell absorption divergence
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckCDVLackSellInterest" checked />
          <label class="form-check-label" for="flexCheckCDVLackSellInterest">
            CDV lack of selling interest divergence
          </label>
        </div>
      </div>
      <div class="card-body d-grid gap-3 text-start">
        <h5 class="card-title">Sell</h5>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckStochasticsRSISell" />
          <label class="form-check-label" for="flexCheckStochasticsRSISell">
            Stochastics and RSI sell signal
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckCDVBuyAbsorption" checked />
          <label class="form-check-label" for="flexCheckCDVBuyAbsorption">
            CDV buy absorption divergence
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckCDVLackBuyInterest" checked />
          <label class="form-check-label" for="flexCheckCDVLackBuyInterest">
            CDV lack of buying interest divergence
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

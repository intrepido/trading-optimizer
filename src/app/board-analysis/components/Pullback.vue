<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>

  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">Pullback</h4>
      </div>
      <div class="card-body d-grid gap-3 text-start">
        <h5 class="card-title">Macro Trend</h5>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
          <label class="form-check-label" for="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
      </div>
      <div class="card-body d-grid gap-3 text-start">
        <h5 class="card-title">Inmediate Trend</h5>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckInmediateTrend" />
          <label class="form-check-label" for="flexCheckInmediateTrend">
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
          <label class="form-check-label" for="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ActionType } from '../enums/action-type.enum';

defineProps<{ percentageByType: Map<ActionType, number> }>()
</script>

<template>
  <div class="row row-cols-1 row-cols-md-1 mb-2 text-center">
    <div class="progress">
      <div class="progress-bar bg-success" role="progressbar"
        :style="{ width: percentageByType.get(ActionType.Buy) + '%' }" aria-valuenow="30" aria-valuemin="0"
        aria-valuemax="100">{{ percentageByType.get(ActionType.Buy) }}%</div>
      <div class="progress-bar bg-danger" role="progressbar"
        :style="{ width: percentageByType.get(ActionType.Sell) + '%' }" aria-valuenow="20" aria-valuemin="0"
        aria-valuemax="100">{{ percentageByType.get(ActionType.Sell) }}%</div>
    </div>
  </div>
</template>

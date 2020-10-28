<template>
  <q-card bordered class="certainty-card q-ma-sm">
    <q-card-section>
      <div class="text-h6">{{ label }}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <p v-for="item in data" :key="item"><span class="text-bold">{{ item[0] }}:</span> {{ item[1] * 100 }}%</p>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CertaintyCard",
  props: {
    'label': String,
    'data': Object,
  }
}
</script>

<style scoped>
  .certainty-card {
    width: 100%;
    max-width: 250px;
  }
</style>
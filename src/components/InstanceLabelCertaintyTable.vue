<template>
  <div class="q-pa-md">
    <p class="text-h6">Classified labels</p>
    <q-markup-table>
      <thead>
      <tr>
        <th class="text-left">Modality</th>
        <th class="text-left">Body part examined</th>
        <th class="text-left">Study description</th>
        <th class="text-left">Series description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="text-left">{{ instance.classifiedModality }}</td>
        <td class="text-left">{{ instance.classifiedBpe }}</td>
        <td class="text-left">{{ instance.classifiedStudydes }}</td>
        <td class="text-left">{{ instance.classifiedSeriesdes }}</td>
      </tr>
      </tbody>
    </q-markup-table>

    <div class="row q-ma-sm">
      <div v-if="instance.status === 'IGNORED'">
        <q-banner inline-actions class="text-black bg-secondary">
          <template v-slot:avatar>
            <q-icon name="fas fa-eye-slash" color="black"/>
          </template>
          This instance is marked to be ignored, so it was not classified.
        </q-banner>

      </div>
      <div v-else-if="instance.status === 'UNPROCESSED'">
        <q-banner inline-actions class="text-white bg-info">
          <template v-slot:avatar>
            <q-icon name="fas fa-pause-circle" color="white"/>
          </template>
          This instance is yet to be classified.
        </q-banner>
      </div>
      <div v-else-if="instance.status === 'PROCESSING'">
        <q-banner inline-actions class="text-white bg-info">
          <template v-slot:avatar>
            <q-spinner-pie color="white" size="3em" />
          </template>
          This instance is currently being classified. Re-open the popup to see the current status.
        </q-banner>
      </div>
      <div v-else-if="instance.status === 'DONE'">
        <q-banner inline-actions class="text-white bg-positive">
          <template v-slot:avatar>
            <q-icon name="fas fa-check-circle" color="white"/>
          </template>
          This instance has been classified. View the detailed results below.
        </q-banner>
      </div>
      <div v-else-if="instance.status === 'ERROR'">
        <q-banner inline-actions class="text-white bg-negative">
          <template v-slot:avatar>
            <q-icon name="fas fa-exclamation-circle" color="white"/>
          </template>
          Error during classification.
          <p v-if="certainties !== null"><span class="text-bold">Message:</span> {{ certainties.message }}</p>
        </q-banner>
      </div>
      <div v-else>
        <q-banner inline-actions class="text-white bg-warning">
          <template v-slot:avatar>
            <q-icon name="fas fa-question-circle" color="white"/>
          </template>
          This instance has an unknown status.
        </q-banner>
      </div>
    </div>

    <div v-if="certainties !== null && !certainties.error" class="row q-ma-sm">
      <CertaintyCard label="Modality" :data="certainties.modality"/>
      <CertaintyCard label="Body part examined" :data="certainties.bpe"/>
      <CertaintyCard label="Orientation" :data="certainties.orientation"/>
      <CertaintyCard label="Study description" :data="certainties.studydes"/>
      <CertaintyCard label="Series description" :data="certainties.seriesdes"/>
    </div>
  </div>
</template>

<script>
import CertaintyCard from "@/components/CertaintyCard";

export default {
  name: "InstanceLabelCertaintyTable",
  components: {CertaintyCard},
  props: {
    'instance': Object,
  },
  data() {
    var c = null;
    try {
      c = JSON.parse(this.instance.classificationResult)
    } catch (e) {
      console.error(e)
    }

    return {
      columns: [
        {name: 'tag', label: 'Tag', field: 'tag', align: 'right', sortable: true, style: "width: 100px"},
        {name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true},
        {name: 'VR', label: 'VR', field: 'vr', align: 'left', sortable: true},
        {name: 'value', label: 'Value', field: 'value', align: 'left', sortable: false},
      ],
      certainties: c
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
<template>
   <q-table title="" :data="tableData()" :columns="columns" row-key="name" style="max-width: 900px;" wrap-cells="true" :pagination="initialPagination">
    <template v-slot:body-cell-name="props">
      <td class="text-left">
        <span v-if="props.row.name">{{ props.row.name }}</span>
        <span v-else class="text-italic">Unknown/custom</span>
      </td>
    </template>
   </q-table>
</template>

<script>
export default {
  name: "InstanceLabelsTable",
  props: {
    'instance': Object,
  },
  data() {
    return {
      columns: [
        {name: 'tag', label: 'Tag', field: 'tag', align: 'right', sortable: true, style: "width: 100px"},
        {name: 'name', label: 'Name', field: 'name', align: 'left', sortable: true},
        {name: 'VR', label: 'VR', field: 'vr', align: 'left', sortable: true},
        {name: 'value', label: 'Value', field: 'value', align: 'left', sortable: false},
      ],
      initialPagination: {
        rowsPerPage: 20
      },
    }
  },
  methods: {
    tableData() {
      var data = []
      var labels = JSON.parse(this.instance.dicomLabels);
      var sortedKeys = Object.keys(labels);
      sortedKeys.sort()
      for (var tag of sortedKeys) {
        data.push({'tag': tag, 'vr': labels[tag].vr, 'value': labels[tag].Value ? labels[tag].Value : labels[tag].BulkDataURI, 'name': labels[tag].name})
      }
      return data
    },
  }
}
</script>

<style scoped>

</style>
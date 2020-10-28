<template>
  <div class="bg-primary" style="min-width: 1000px;">
    <div v-if="dialogLoading">
      <q-bar class="bg-accent text-secondary">
        <span>View DICOM labels</span>
        <q-space/>
        <q-btn dense flat icon="fas fa-times" v-close-popup>
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-bar>
      <div class="q-pl-lg q-pr-lg q-pt-md q-pb-sm">
        <q-skeleton type="text" class="q-mt-sm q-mb-sm" height="28px"/>
        <q-separator class="q-mt-md q-mb-md"/>
        <div class="q-pa-md">
          <q-markup-table>
            <thead>
            <tr>
              <th class="text-left" style="width: 60px">
                <q-skeleton type="text"/>
              </th>
              <th class="text-right" style="width: 120px">
                <q-skeleton type="text"/>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="n in 5" :key="n">
              <td class="text-left">
                <q-skeleton type="text" width="60px"/>
              </td>
              <td class="text-right">
                <q-skeleton type="text" width="120px"/>
              </td>
            </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </div>
    <div v-else>
      <q-bar class="bg-accent text-secondary">
        <span>View DICOM labels</span>
        <q-space/>
        <q-btn dense flat icon="fas fa-times" v-close-popup>
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-bar>
      <div class="q-pl-lg q-pr-lg q-pt-md q-pb-sm">
        <p class="text-subtitle1 q-mb-none">DICOM labels for this study</p>
        <p>
          <b>Study description: </b>{{ studyDetails.studyDescription }}<br/>
          <b>Study date: </b>{{ studyDetails.studyDate }} {{ studyDetails.studyTime }}<br/>
          <b>Number of images: </b>{{ studyDetails.instanceSet.length }}
        </p>
        <q-separator class="q-mt-md q-mb-md"/>

        <q-table title="Images" :data="studyDetails.instanceSet" :columns="columns" row-key="id" :pagination="initialPagination">
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th auto-width/>
              <q-th v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td auto-width>
                <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'fas fa-angle-double-up' : 'fas fa-angle-double-down'"/>
              </q-td>
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
              </q-td>
            </q-tr>
            <q-tr v-show="props.expand" :props="props">
              <q-td colspan="100%">
                <InstanceLabelsTable :instance="props.row" />
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script>
import GraphQL from "../graphql_queries/labels";
import InstanceLabelsTable from "@/components/InstanceLabelsTable";

export default {
  name: "ViewLabelsDialog",
  components: {InstanceLabelsTable},
  props: {
    'viewId': String,
  },
  data() {
    return {
      dialogError: false,
      dialogErrorMessage: null,
      dialogLoading: true,
      studyDetails: null,
      columns: [{name: 'id', label: 'Image', field: 'id', align: 'left', sortable: true, format: (val, row) => `Image #${this.studyDetails.instanceSet.indexOf(row)+1}/${this.studyDetails.instanceSet.length}`,}],
      initialPagination: {
        rowsPerPage: 10
      },
    }
  },
  created() {
    if (this.viewId === null) {
      this.dialogError = true;
      this.dialogErrorMessage = "No DICOM file loaded, please try again";
      this.dialogLoading = false;
    } else {
      this.loadLabels();
    }
  },
  methods: {
    async loadLabels() {
      try {
        // TODO: Server-side pagination
        this.studyDetails = await GraphQL.getStudyDetails(this.viewId)
        this.dialogLoading = false
      } catch (e) {
        this.dialogError = true
        this.dialogErrorMessage = null
      }
    },
  }
}
</script>

<style scoped>
</style>
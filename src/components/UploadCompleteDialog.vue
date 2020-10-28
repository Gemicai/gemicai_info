<template>
  <q-card style="min-width: 800px;">
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">Upload complete!</div>
      <q-space/>
      <q-item icon="fas fa-times" flat round dense v-close-popup/>
    </q-card-section>

    <q-card-section>
      <div class="q-gutter-sm row items-start">
        <q-list bordered style="width: 100%;">
          <q-expansion-item expand-separator icon="fas fa-upload" :label="'' + uploadData.success.length + ' file(s) uploaded!'" class="bg-positive">
            <p v-for="file in uploadData.success" v-bind:key="file" class="q-pa-md q-mb-none bg-primary">
              <span class="text-bold">#{{ file.instance_id }}:</span> {{ file.filename }}
            </p>
          </q-expansion-item>
          <q-expansion-item v-if="uploadData.errors.length > 0" expand-separator icon="fas fa-exclamation-circle" :label="'' + uploadData.errors.length + ' file(s) failed to upload!'" class="bg-negative">
            <p v-for="file in uploadData.errors" v-bind:key="file" class="q-pa-md q-mb-none bg-primary">
              <span class="text-bold">{{ file.filename }}:</span> {{ file.error_message }}
            </p>
          </q-expansion-item>
        </q-list>
      </div>
      <div class="q-gutter-sm row items-start q-mt-md">
        <p class="text-h6">Updated studies</p>
        <q-list bordered style="width: 100%;">
          <q-item v-for="uid in uploadData.study_uids" v-bind:key="uid" class="q-pa-sm-md" clickable v-ripple v-on:click="openStudy(uid)">
            <q-item-section>{{ uid }}</q-item-section>
            <q-item-section avatar><q-icon color="white" name="fas fa-arrow-circle-right" /></q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="q-gutter-sm row items-start q-mt-md">
        <q-btn color="accent" @click="closeDialog()">Close</q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "UploadCompleteDialog",
  props: {
    'uploadData': Object,
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog')
    },
    openStudy(uid) {
      this.$router.push({name: 'ohif', params: {uid: uid}})
    }
  }
}
</script>

<style scoped>

</style>

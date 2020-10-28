<template>
  <q-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">Upload DICOM file</div>
      <q-space/>
      <q-item icon="fas fa-times" flat round dense v-close-popup/>
    </q-card-section>

    <q-card-section>
      <div class="q-gutter-sm row items-start">
        <q-uploader
            url=""
            style="max-width: 800px"
            label="Select DICOM file(s) (.dcm, .dcm.gz)"
            multiple
            accept=".dcm, .dcm.gz"
            ref="uploader"
            hide-upload-btn
            @rejected="onRejected"
            @added="onFileAdded"
            @removed="onFileRemoved"
        />
      </div>
      <div class="q-gutter-sm row items-start q-mt-md">
        <q-btn color="accent" :disable="!checkIfUpload" @click="uploadFile()">Upload files</q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import axios from "axios";

export default {
  name: "UploadFileDialog",
  data() {
    return {
      selectedFiles: [],
      checkIfUpload: false,
    }
  },
  methods: {
    onRejected(rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} of the selected file(s) are not .dcm or .dcm.gz files.`
      })
    },
    onFileAdded(files) {
      this.selectedFiles.push(...files)
      this.checkIfUpload = true;
    },
    onFileRemoved(files) {
      for (var file of files) {
        var i = this.selectedFiles.indexOf(file)
        this.selectedFiles.splice(i, 1)
      }
      this.checkIfUpload = (this.selectedFiles.length > 0)
    },
    uploadFile() {
      var vm = this
      let fd = new FormData()
      for (var file of this.selectedFiles) {
        fd.append("file", file)
      }

      axios.post('../upload/', fd, {
        headers: {'Content-Type': undefined}
      }).then(function (response) {
        vm.$emit('upload-complete', response.data)
        vm.selectedFiles = []
        vm.checkIfUpload = false
        vm.$refs.uploader.reset()
        vm.$emit('closeDialog')
      }).catch(function (err) {
        vm.$emit('upload-failed', err)
        vm.$q.notify({
          type: 'negative',
          message: `Failed to upload files. ${err}`
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
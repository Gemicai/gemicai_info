<template>
  <div class="row">
    <div class="col-xs-12 xol-sm-10 col-md-8 col-lg-6">
      <iframe title="PDF Viewer" height="100%" width=100% :src="`${getFilePath}`"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PDFJSViewer',
  props: {
    file: String,
    path: String
  },
  computed: {
    getFilePath() {
      if (this.file !== '') {
        return this.path + '?file=' + this.file
      }
      return this.path
    }
  }
}
</script>
<style scoped>
div {
  height: 79vh;
  max-height: 500px;
  min-width: 400px;
}
</style>

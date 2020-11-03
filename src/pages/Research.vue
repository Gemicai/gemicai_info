<template>
  <q-page>
    <div class="q-pa-md">
      <h5 id="Further-Research" class="q-mt-none q-mb-md">Further Research</h5>
      <p>
        Gemicai as it is right now, is far from a perfect product. The first release is a 10-week project written for a
        Computer Science Bachelor design project, so of course not everything that would be needed for a library of this
        calibre is implemented. Because we do believe in the value of the library, we wrote some research proposals for
        people that want to further the work on this library. Check them out below!
      </p>
      <div v-for="proposal of proposals" :key="proposal.name">
        <h6 :id="proposal.anchor" class="q-mt-none q-mb-sm">{{ proposal.name }}</h6>
        <p class="text-subtitle1">{{ proposal.description }}</p>
        <PDFJSViewer :path="publicPath + 'lib/pdfjs/web/viewer.html'" :file="proposal.file"/>
        <q-space class="q-mb-lg" />
      </div>
    </div>
  </q-page>
</template>

<script>
import proposals from '../proposals';
import PDFJSViewer from "../components/PDFJSViewer";

export default {
  name: "Research",
  components: {
    PDFJSViewer
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      proposals: proposals,
    }
  },
}
</script>

<style scoped>

</style>
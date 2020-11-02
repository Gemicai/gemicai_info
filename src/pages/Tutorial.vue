<template>
  <q-page class="q-pa-md q-ml-sm">
    <q-btn-group spread>
      <q-btn color="accent" class="q-pa-sm" label="Previous tutorial" icon="fas fa-step-backward" :disable="!previousAvailable" @click="previousTutorial" />
      <q-btn style="border-left: 1px solid #7CCBDF; border-right: 1px solid #7CCBDF;" color="accent" class="q-pa-sm" label="Download .ipynb notebook" icon="fas fa-download" :disable="!downloadAvailable" @click="downloadTutorial" />
      <q-btn color="accent" class="q-pa-sm" label="Next tutorial" icon-right="fas fa-step-forward" :disable="!nextAvailable" @click="nextTutorial" />
    </q-btn-group>

    <JupyterNotebookHTML :contents="tutorialContents" />
  </q-page>
</template>

<script>
import JupyterNotebookHTML from "../components/JupyterNotebookHTML";
import tutorials from "../tutorials/tutorials";

export default {
  name: "Tutorial",
  components: {JupyterNotebookHTML},
  data() {
    return {
      tutorials: tutorials
    }
  },
  computed: {
    currentId() {
      return Number.parseInt(this.$route.params.id, 10) || 1;
    },
    previousAvailable() {
      return this.getTutorial(this.currentId - 1) !== null
    },
    nextAvailable() {
      return this.getTutorial(this.currentId + 1) !== null
    },
    downloadAvailable() {
      var tutorial = this.getTutorial(this.currentId)
      if(tutorial !== null) {
        return tutorial.pynb_link !== null
      } else {
        return false
      }
    },
    tutorialContents() {
      var tutorial = this.getTutorial(this.currentId)
      if(tutorial !== null && tutorial.contents !== null) {
        return tutorial.contents
      } else {
        return null
      }
    }
  },
  methods: {
    getTutorial(id) {
      var tutorial = this.tutorials.filter(x => x.id === id)
      if (tutorial.length > 0) {
        return tutorial[0]
      } else {
        return null
      }
    },
    validTutorial() {
      return this.getTutorial(this.currentId) !== null;
    },
    tutorialPath() {
      var tutorial = this.getTutorial(this.currentId)
      if(tutorial !== null) {
        return tutorial.html_path
      } else {
        return null
      }
    },
    previousTutorial() {
      var tutorial = this.getTutorial(this.currentId)
      if(tutorial !== null) {
        this.$router.push({name: 'tutorial', params: {id: (this.currentId - 1)}})
      } else {
        return false
      }
    },
    nextTutorial() {
      var tutorial = this.getTutorial(this.currentId)
      if(tutorial !== null) {
        this.$router.push({name: 'tutorial', params: {id: (this.currentId + 1)}})
      } else {
        return false
      }
    },
    downloadTutorial() {
      var tutorial = this.getTutorial(this.currentId)
      if(tutorial !== null) {
        window.open(tutorial.pynb_link, "_blank")
      } else {
        return ""
      }
    }
  }
}
</script>

<style scoped>
  div.tutorialContainer {

  }
</style>
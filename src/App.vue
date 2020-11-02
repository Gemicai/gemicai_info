<template>
  <div>
    <q-layout view="hHh LpR fFf">
      <q-header bordered class="bg-white text-black">

        <!-- Mobile view toolbars -->
        <q-toolbar class="bg-white lt-md">
          <q-btn v-if="onTutorialPage()" dense flat round icon="fas fa-bars" size="xl" @click="left = !left"/>
          <q-toolbar-title class="flex items-center justify-center">
            <router-link to="/">
              <img class="headerImage" alt="" src="./assets/gemicai_logo.png" style="max-height: 80px;">
            </router-link>
          </q-toolbar-title>
        </q-toolbar>
        <q-tabs class="lt-md" dense inline-label>
          <q-route-tab to="/docs" label="Documentation" exact no-caps  />
          <q-route-tab to="/tutorials" label="Tutorials" exact no-caps  />
          <q-route-tab to="/research" label="Research" exact no-caps  />
          <q-route-tab to="/about-us" label="About Us" exact no-caps  />
          <q-tab @click="openGitHub" label="GitHub" no-caps icon="fab fa-github" />
        </q-tabs>


        <!-- Desktop view toolbars -->
        <q-toolbar class="bg-white q-pl-none gt-sm">
          <q-toolbar-title class="flex items-center justify-center gt-sm" style="max-width: 300px; height:120px; flex-grow: 100;">
            <router-link to="/" class="flex justify-center">
              <img class="headerImage" alt="" src="./assets/gemicai_logo.png" style="max-height: 120px; width: 100%;">
            </router-link>
          </q-toolbar-title>

          <q-space style="min-width: 0;" />

          <q-btn class="q-pl-md q-pr-md" to="/docs" label="Documentation" size="lg" no-caps stretch flat clickable :class="this.$route.name === 'docs' ? 'bg-accent text-white' : 'bg-white text-black'" />
          <q-btn class="q-pl-md q-pr-md" to="/tutorials" label="Tutorials" size="lg" no-caps stretch flat clickable :class="this.$route.name === 'tutorials' || this.$route.name === 'tutorial' ? 'bg-accent text-white' : 'bg-white text-black'" />
          <q-btn class="q-pl-md q-pr-md" to="/research" label="Research" size="lg" no-caps stretch flat clickable :class="this.$route.name === 'research' ? 'bg-accent text-white' : 'bg-white text-black'" />
          <q-btn class="q-pl-md q-pr-md" to="/about-us" label="About Us" size="lg" no-caps stretch flat clickable :class="this.$route.name === 'about-us' ? 'bg-accent text-white' : 'bg-white text-black'" />
          <q-btn class="q-pl-md q-pr-md" type="a" href="https://github.com/Gemicai/" target="_blank" label="GitHub" size="lg" no-caps stretch flat icon-right="fab fa-github" />

        </q-toolbar>
      </q-header>

      <q-drawer v-if="onTutorialPage()" show-if-above v-model="left" side="left" bordered>
        <q-list bordered separator>
          <div v-for="tutorial of tutorials" :key="tutorial.id">
            <q-item clickable v-ripple :to="'/tutorials/' + tutorial.id" :class="isCurrent(tutorial.id) ? 'bg-accent text-white' : 'bg-white text-black'">
              <q-item-section>{{ tutorial.id }} - {{ tutorial.title }}</q-item-section>
              <q-item-section avatar>
                <q-icon v-if="isCurrent(tutorial.id)" name="fas fa-chevron-down" />
                <q-icon v-else name="fas fa-chevron-right" />
              </q-item-section>
            </q-item>
            <div v-if="isCurrent(tutorial.id)">
              <q-item v-for="section of tutorial.sections" :key="section.name" :inset-level=0.25 clickable v-ripple class="bg-secondary" :to="'#' + section.anchor">
                <q-item-section>{{ section.name }}</q-item-section>
              </q-item>
            </div>
          </div>
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view/>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      left: false,
      tutorials: [
        {
          id: 1,
          title: "Intro to Gemicai",
          sections: [
            {name: "Preliminaries", anchor: "Preliminaries"},
            {name: "Datasets", anchor: "Datasets"},
            {name: "Classifiers", anchor: "Classifiers"},
            {name: "Saving and loading a classifier", anchor: "Saving-and-loading-a-classifier"},
            {name: "Hyper parameter optimisation", anchor: "Hyper-parameter-optimisation"},
            {
              name: "HTML for notebook formatting (you can ignore this)",
              anchor: "HTML-for-notebook-formatting-(you-can-ignore-this)"
            },
          ]
        }, {
          id: 2,
          title: "From data pre-processing to model evaluation",
          sections: [
            {name: "Preliminaries", anchor: "2.0-Preliminaries"},
            {name: "Data preproccessing", anchor: "2.1-Data-preproccessing"},
            {name: "Classifier initialization", anchor: "2.2-Classifier-initialization"},
            {name: "Hyper parameter optimisation", anchor: "2.3-Hyper-parameter-optimisation"},
            {name: "Model evaluation", anchor: "2.4-Model-evaluation"},
          ]
        }, {
          id: 3,
          title: "Intro to Gemicai",
          sections: [
            {name: "Initialize gemset", anchor: "3.1-Initialize-gemset"},
            {name: "Tweaking gemset", anchor: "3.2-Tweaking-gemset"},
          ]
        }, {
          id: 4,
          title: "Unknown",
          sections: []
        }, {
          id: 5,
          title: "ClassifierTree",
          sections: [
            {name: "Initialising ClassifierTree", anchor: "3.1-Initialising-ClassifierTree"},
            {name: "Training the tree", anchor: "3.2-Training-the-tree"},
            {name: "Evaluating the tree", anchor: "3.3-Evaluating-the-tree"},
            {name: "Tweaking individual nodes in the tree", anchor: "3.4-Tweaking-individual-nodes-in-the-tree"},
          ]
        },
      ],
    }
  },
  computed: {
    currentId() {
      if (this.onTutorialPage()) {
        return Number.parseInt(this.$route.params.id, 10) || -1;
      } else {
        return -1;
      }
    },
  },
  methods: {
    onTutorialPage() {
      return this.$route.name === 'tutorials' || this.$route.name === "tutorial"
    },
    isCurrent(id) {
      return this.currentId === id
    },
    openGitHub() {
      window.open("https://github.com/Gemicai", "_blank")
    }
  }
}
</script>

<style>
.q-header--bordered, .q-drawer--bordered {
  border-width: 8px !important;
  border-color: var(--q-color-accent) !important;
}
</style>

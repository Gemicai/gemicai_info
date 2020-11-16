<template>
  <div>
    <q-layout view="hHh LpR fFf">
      <q-header bordered class="bg-white text-black">

        <!-- Mobile view toolbars -->
        <q-toolbar class="bg-white lt-md">
          <q-btn v-if="onTutorialPage() || onResearchPage()" dense flat round icon="fas fa-bars" size="xl" @click="left = !left"/>
          <q-toolbar-title class="flex items-center justify-center">
            <router-link to="/">
              <img class="headerImage" alt="" src="./assets/gemicai_logo.png" style="max-height: 80px;">
            </router-link>
          </q-toolbar-title>
        </q-toolbar>
        <q-tabs class="lt-md" dense inline-label>
          <q-route-tab to="/documentation" label="Documentation" exact no-caps  />
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

          <q-btn class="q-pl-md q-pr-md" to="/documentation" label="Documentation" size="lg" no-caps stretch flat clickable :class="this.$route.name === 'docs' ? 'bg-accent text-white' : 'bg-white text-black'" />
          <q-btn class="q-pl-md q-pr-md" to="/tutorials" label="Tutorials" size="lg" no-caps stretch flat clickable :class="this.$route.name === 'tutorials' || this.$route.name === 'tutorial' ? 'bg-accent text-white' : 'bg-white text-black'" />
          <q-btn class="q-pl-md q-pr-md" to="/research" label="Research" size="lg" no-caps stretch flat clickable :class="this.$route.name === 'research' ? 'bg-accent text-white' : 'bg-white text-black'" />
          <q-btn class="q-pl-md q-pr-md" to="/about-us" label="About Us" size="lg" no-caps stretch flat clickable :class="this.$route.name === 'about-us' ? 'bg-accent text-white' : 'bg-white text-black'" />
          <q-btn class="q-pl-md q-pr-md" type="a" href="https://github.com/Gemicai/Gemicai/" target="_blank" label="GitHub" size="lg" no-caps stretch flat icon-right="fab fa-github" />

        </q-toolbar>
      </q-header>

      <q-drawer v-if="onTutorialPage()" show-if-above v-model="left" side="left" bordered>
        <q-list separator>
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

      <q-drawer v-if="onResearchPage()" show-if-above v-model="left" side="left" bordered>
        <q-list separator>
          <div>
            <q-item clickable v-ripple to="#Further-Research">
              <q-item-section>Further Research</q-item-section>
            </q-item>
          </div>
          <div v-for="proposal of proposals" :key="proposal.name">
            <q-item clickable v-ripple :to="'#' + proposal.anchor" :inset-level=0.25>
              <q-item-section>{{ proposal.name }}</q-item-section>
            </q-item>
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
import tutorials from "./tutorials/tutorials";
import proposals from './proposals';

export default {
  name: 'App',
  data() {
    return {
      left: false,
      tutorials: tutorials,
      proposals: proposals,
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
    onResearchPage() {
      return this.$route.name === 'research'
    },
    isCurrent(id) {
      return this.currentId === id
    },
    openGitHub() {
      window.open("https://github.com/Gemicai/Gemicai", "_blank")
    }
  },
  mounted() {
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.$router.push(path);
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

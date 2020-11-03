<template>
  <q-page>
    <div class="q-pa-md">
      <h6 class="q-mt-none">Gemicai Tutorials</h6>
      <p>There are a few Gemicai tutorials available to familiarize yourself with the system. These tutorials hopefully
        get you enough of a grasp on how Gemicai works to be able to use it in your own projects. Look below, or in the
        sidebar, for the available tutorials!</p>

      <q-list bordered>
        <q-item v-for="tutorial of tutorials" :key="tutorial.id" clickable :to="'tutorials/' + tutorial.id">
          <q-item-section>{{ tutorial.id }} - {{ tutorial.title }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import tutorials from "../tutorials/tutorials";

export default {
  name: "Tutorials",
  data() {
    return {
      tutorials: tutorials
    }
  },
}
</script>

<style scoped>

</style>
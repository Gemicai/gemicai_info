<template>
  <q-page>
    <div class="q-pa-md">
		<h6>Still need to load the intro html file in below</h6>
		<intro />
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

Vue.component('intro', function(resolve, reject){
	axios.get("./assets/intro_to_gemicai.html").then(response => {
		resolve({template: response.data})
		reject(console.log("error"))
	})
})
export default {
	name: "intropage",
	components: {
		intro : 'intro'
	}
}



</script>

<style scoped>

</style>
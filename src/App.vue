<template>
	<div>
		<div>
			<q-toolbar>
				<q-img src="./assets/logo.png" width="257px" height="210px" class="center">
				</q-img>	  
			</q-toolbar>
		</div>
		<q-layout view="hHh LpR fFf">
			<q-page-container>
				<q-page>
					<!-- place QPageSticky at end of page -->
						<q-page-sticky expand :position="stickposition" v-scroll="scrolled">
						<q-toolbar class="toolbar glossy">
							<router-link to="/">
								<img class="headerImage" alt="" src="./assets/toplogo.png" width="30%">
							</router-link>
							<router-link class="block" id="navbutton" to="/background">Background</router-link>
							<router-link class="block" id="navbutton" to="/tutorials">Tutorials</router-link>
						</q-toolbar>
					</q-page-sticky>
					<router-view :style="textposition" />
				</q-page>
			</q-page-container>
		</q-layout>
	</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
		apiUrl: "",
		navMenu: true,
		stickposition: "",
		textposition: "",
		home: false
    }
  },
  methods: {
	scrolled(position)	{
		if(position>300 && this.stickposition!=="top") {
			this.stickposition="top"
			this.textposition = "margin-top: 0px"
		}
		else if(position<=300 && this.stickposition!=="") {
		this.stickposition=""
		this.textposition=""
		}
	}
  }
}
</script>

<style>
.q-layout.q-layout--standard {
  max-height: 100%;
  height: 100%;
}

.row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.q-table__middle.scroll {
  position: unset !important;
}

.toolbar  {
	background-color: #151A1F;
	margin-bottom: -50px;
	opacity: 1;
	height: 30px;
}

.center {
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 45px;
	margin-bottom: 45px;
	width: 50%;
}

.navHeader.q-header--bordered {
  border-bottom-width: 3px;
}

.navMenu .q-drawer--left.q-drawer--bordered {
  border-right-width: 3px;
}

.block {
  display: block;
  width: 200px;
  border: none;
  padding: 8px 20px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  align: right;
  font-size: 20px;
  border-left: 1px solid #787877;
}

.button:hover {background-color: #3e8e41}

.imageContainer {
	max-height: 200px;
	position: top;
}

.bodyContainer {
	height: 100%;
	max-height: 100%;
	flex-direction: column;
}
</style>

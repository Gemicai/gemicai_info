<template>
  <q-page>
    <div class="q-pa-md">
      <h4 class="q-mt-lg q-mb-sm text-center">Gemicai - General-purpose Medical Image Classification AI</h4>
      <p class="text-h5 text-weight-light text-italic text-center q-mb-xl">"AI won't replace radiologists, but
        radiologists who use AI will replace radiologists who don't." - Dr. Curtis Langlotz</p>
      <div class="row justify-center">
        <div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7">
          <q-card class="bg-secondary" flat square>
            <q-card-section horizontal>
              <q-card-section class="flex column justify-center items-end">
                <div class="text-h5 q-pb-md text-right">Help radiologists make better diagnoses faster</div>
                <p class="text-subtitle1 q-mb-none text-right">Our ultimate goal is to improve the quality of healthcare
                  with the use of Artificial Intelligence. Gemicai will save radiologists' time, by automating hanging
                  protocols that nowadays still require manual selection.</p>
              </q-card-section>
              <q-img class="col-4 q-ma-lg" src="../assets/radiologist.png"/>
            </q-card-section>
          </q-card>

          <q-card class="" flat square>
            <q-card-section horizontal>
              <q-img class="col-4 q-ma-lg" src="../assets/researcher.png"/>
              <q-card-section class="flex column justify-center items-start">
                <div class="text-h5 q-pb-md text-left">Medical imaging research platform</div>
                <p class="text-subtitle1 q-mb-none text-left">Gemicai is an open source deep learning library with
                  extensive functionality for the DICOM standard. This makes it an excellent tool for medical imaging AI
                  research. Among other things, Gemicai makes data pre-processing a breeze and automatically configures
                  GPU hardware acceleration. This leaves researchers more time for the research that matters.</p>
              </q-card-section>
            </q-card-section>
          </q-card>

          <q-card class="bg-secondary" flat square>
            <q-card-section horizontal>
              <q-card-section class="flex column justify-center items-end">
                <div class="text-h5 q-pb-md text-right">User-friendly web application</div>
                <p class="text-subtitle1 q-mb-none text-right">An intuitive web application where anyone can interact
                  with the AI. Some of its core features include: storing and uploading DICOM files, classifying image
                  attributes, inspecting AI certainty scores, viewing DICOM files with the embeded OHIF viewer. Both the
                  DICOM and DICOMweb communication protocols are also supported, enabling deployment in a typical
                  hospital environment.</p>
              </q-card-section>
              <q-img class="col-4 q-ma-lg" src="../assets/woman.png"/>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="column justify-center">
        <h5 class="text-center">Check out some of the links below to get started!</h5>
        <div class="col-xs-12 col-sm-11 col-md-10 col-lg-8 col-xl-7 row justify-center">
          <q-btn size="xl" class="q-ma-sm" color="primary" to="/documentation">
            <template slot="default">
              <div class="row justify-start items-center q-pl-lg lt-sm" style="width: 300px;">
                <q-icon name="fas fa-book" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
                <span class="text-capitalize text-weight-regular q-ml-sm q-mr-md">Documentation</span>
              </div>
              <div class="column justify-center items-center gt-xs">
                <q-icon name="fas fa-book" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="100px" />
                <span class="text-capitalize text-weight-regular q-mb-md">Documentation</span>
              </div>
            </template>
          </q-btn>
          <q-btn size="xl" class="q-ma-sm" color="primary" to="/tutorials">
            <template slot="default">
              <div class="row justify-start items-center q-pl-lg lt-sm" style="width: 300px;">
                <q-icon name="fas fa-chalkboard-teacher" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
                <span class="text-capitalize text-weight-regular q-ml-sm q-mr-md">Tutorials</span>
              </div>
              <div class="column justify-center items-center gt-xs">
                <q-icon name="fas fa-chalkboard-teacher" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="100px" />
                <span class="text-capitalize text-weight-regular q-mb-md">Tutorials</span>
              </div>
            </template>
          </q-btn>
          <q-btn size="xl" class="q-ma-sm" color="primary" type="a" href="https://github.com/Gemicai/Gemicai/" target="_blank">
            <template slot="default">
              <div class="row justify-start items-center q-pl-lg lt-sm" style="width: 300px;">
                <q-icon name="fab fa-github" class="q-ml-xs q-mr-md q-mt-md q-mb-md" size="40px" />
                <span class="text-capitalize text-weight-regular q-ml-sm q-mr-md">GitHub</span>
              </div>
              <div class="column justify-center items-center gt-xs">
                <q-icon name="fab fa-github" class="q-ml-xl q-mr-xl q-mt-xl q-mb-md" size="100px" />
                <span class="text-capitalize text-weight-regular q-mb-md">GitHub</span>
              </div>
            </template>
          </q-btn>
        </div>
      </div>
      <q-space class="q-mb-xl" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Home",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
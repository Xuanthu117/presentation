<script setup lang="ts">
import Slide00Cover from './components/slides/Slide00Cover.vue';
import Slide01Intro from './components/slides/Slide01Intro.vue';
import Slide02Mindset from './components/slides/Slide02Mindset.vue';
import Slide03Mistakes from './components/slides/Slide03Mistakes.vue';
import Slide04ScientificMethod
  from './components/slides/Slide04ScientificMethod.vue';
import Slide05Isolation from './components/slides/Slide05Isolation.vue';
import Slide06Metrics from './components/slides/Slide06Metrics.vue';
import Slide07Toolkit from './components/slides/Slide07Toolkit.vue';
import Slide08IdeTips from './components/slides/Slide08IdeTips.vue';
import Slide09Frontend from './components/slides/Slide09Frontend.vue';
import Slide10Backend from './components/slides/Slide10Backend.vue';
import Slide11Qa from './components/slides/Slide11Qa.vue';
import Slide12Collaboration from './components/slides/Slide12Collaboration.vue';
import Slide13LevelUp from './components/slides/Slide13LevelUp.vue';
import Slide14Tips from './components/slides/Slide14Tips.vue';
import Slide15Profile from './components/slides/Slide15Profile.vue';
import Slide16Summary from './components/slides/Slide16Summary.vue';
import Slide17Cta from './components/slides/Slide17Cta.vue';

function scrollToStart() {
  document.getElementById('slide-1')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="snap-container">
    <Slide00Cover/>
    <Slide01Intro />
    <Slide02Mindset />
    <Slide03Mistakes />
    <Slide04ScientificMethod />
    <Slide05Isolation />
    <Slide06Metrics />
    <Slide07Toolkit />
    <Slide08IdeTips />
    <Slide09Frontend />
    <Slide10Backend />
    <Slide11Qa />
    <Slide12Collaboration />
    <Slide13LevelUp />
    <Slide14Tips />
    <Slide15Profile />
    <Slide16Summary />
    <Slide17Cta :on-restart="scrollToStart" />
  </div>
</template>

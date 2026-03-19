<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue';

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
import SlideBETools from './components/slides/SlideBETools.vue';
import SlideExampleDevtools from './components/slides/SlideExampleDevtools.vue';
import SlideExamplePerformance
  from './components/slides/SlideExamplePerformance.vue';
import SlideFETools from './components/slides/SlideFETools.vue';
import SlideQATools from './components/slides/SlideQATools.vue';

const slideItems = [
  "Cover",
  "Intro",
  "Mindset",
  "Mistakes",
  "Method",
  "Isolation",
  "Metrics",
  "Toolkit",
  "IDE Tips",
  "Frontend",
  "Backend",
  "QA",
  "Collab",
  "Level Up",
  "FE Tools",
  "BE Tools",
  "QA Tools",
  "Tips",
  "Profile",
  "Summary",
  "CTA",
];

const containerRef = ref<HTMLElement | null>(null);
const slideElements = ref<HTMLElement[]>([]);
const currentSlideIndex = ref(0);
const isIndicatorVisible = ref(true);

let observer: IntersectionObserver | null = null;

function formatnumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function syncSlideElements() {
  if (!containerRef.value) {
    slideElements.value = [];
    return;
  }

  slideElements.value = Array.from(
    containerRef.value.querySelectorAll<HTMLElement>(".slide"),
  );

  slideElements.value.forEach((slide, index) => {
    slide.dataset.slideIndex = String(index);

    if (!slide.id) {
      slide.id = `slide-${index + 1}`;
    }
  });
}

function observeSlides() {
  observer?.disconnect();

  if (!containerRef.value || slideElements.value.length === 0) {
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (entryA, entryB) =>
            entryB.intersectionRatio - entryA.intersectionRatio,
        )[0];

      if (!visibleEntry) {
        return;
      }

      const index = Number(
        (visibleEntry.target as HTMLElement).dataset.slideIndex,
      );

      if (Number.isInteger(index)) {
        currentSlideIndex.value = index;
      }
    },
    {
      root: containerRef.value,
      threshold: [0.55, 0.75],
    },
  );

  slideElements.value.forEach((slide) => observer?.observe(slide));
}

function scrollToSlide(index: number) {
  slideElements.value[index]?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function scrollToStart() {
  scrollToSlide(0);
}

function toggleIndicator() {
  isIndicatorVisible.value = !isIndicatorVisible.value;
}

onMounted(async () => {
  await nextTick();
  syncSlideElements();
  observeSlides();
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
const Slides = computed(() => {
  return [
    {
      id: 0,
      number: 0,
      component: Slide00Cover,
    },
    {
      id: 1,
      number: 1,
      component: Slide01Intro,
    },
    {
      id: 2,
      number: 2,
      component: Slide02Mindset,
    },
    {
      id: 3,
      number: 3,
      component: Slide03Mistakes,
    },
    {
      id: 4,
      number: 4,
      component: Slide04ScientificMethod,
    },
    {
      id: 5,
      number: 5,
      component: Slide05Isolation,
    },
    {
      id: 6,
      number: 6,
      component: Slide06Metrics,
    },
    {
      id: 7,
      number: 7,
      component: Slide07Toolkit,
    },
    {
      id: 8,
      number: 8,
      component: Slide08IdeTips,
    },
    {
      id: 9,
      number: 9,
      component: Slide09Frontend,
    },
    {
      id: 10,
      number: 10,
      component: Slide10Backend,
    },
    {
      id: 11,
      number: 11,
      component: Slide11Qa,
    },
    {
      id: 12,
      number: 12,
      component: Slide12Collaboration,
    },
    {
      id: 13,
      number: 13,
      component: Slide13LevelUp,
    },
    {      id: 14,
      number: 14,
      component: SlideFETools,
    },
    {
      id: 15,
      number: 15,
      component: SlideBETools,
    },
    {
      id: 16,
      number: 16,
      component: SlideQATools,
    },
    {
      id: 17,
      number: 17,
      component: Slide14Tips,
    },
    {
      id: 18,
      number: 18,
      component: Slide15Profile,
    },
    {
      id: 19,
      number: 19,
      component: Slide16Summary,
    },
    {
      id: 20,
      number: 20,
      component: Slide17Cta,
    },
    {id: 21,
      number: 21,
      component: SlideExampleDevtools,
    },{
      id: 22,
      number: 22,
      component: SlideExamplePerformance,
    }
  ];
});
</script>

<template>
  <div class="presentation-shell">
    <div ref="containerRef" class="snap-container">
      <component
        v-for="slide in Slides"
        :is="slide.component"
        :key="slide.id"
        :id="slide.id"
        :number="slide.number"
        :on-restart="scrollToStart"
        
      />
      <!-- <Slide06Metrics />
      <Slide07Toolkit />
      <Slide08IdeTips />
      <Slide09Frontend />
      <Slide10Backend />
      <Slide11Qa />
      <Slide12Collaboration />
      <Slide13LevelUp />
       <Slide14Tips />
      <SlideFETools />
      <SlideBETools id="slide-16" number="16"/>
      <SlideQATools/>
     
      <Slide15Profile />
      <Slide16Summary />
      <Slide17Cta :on-restart="scrollToStart" /> -->
    </div>

    <button
      type="button"
      class="slide-indicator-toggle"
      :class="{ 'is-open': isIndicatorVisible }"
      :aria-controls="'slide-indicator-panel'"
      :aria-expanded="isIndicatorVisible ? 'true' : 'false'"
      @click="toggleIndicator"
    >
      <span class="slide-indicator-toggle__icon">{{
        isIndicatorVisible ? "×" : "☰"
      }}</span>
      <span class="slide-indicator-toggle__text">{{
        isIndicatorVisible ? "Hide slides" : "Show slides"
      }}</span>
    </button>

    <nav
      id="slide-indicator-panel"
      class="slide-indicator"
      :class="{ 'is-hidden': !isIndicatorVisible }"
      aria-label="Slide navigation"
    >
      <div class="slide-indicator__summary">
        <span class="slide-indicator__current">{{
          formatnumber(currentSlideIndex)
        }}</span>
        <span class="slide-indicator__separator"></span>
        <span class="slide-indicator__total">{{
          formatnumber(slideItems.length - 1)
        }}</span>
      </div>

      <ol class="slide-indicator__list">
        <li v-for="(slideLabel, index) in slideItems" :key="slideLabel">
          <button
            type="button"
            class="slide-indicator__button"
            :class="{ 'is-active': index === currentSlideIndex }"
            :aria-label="`Go to slide ${formatnumber(index)}: ${slideLabel}`"
            :aria-current="index === currentSlideIndex ? 'true' : undefined"
            @click="scrollToSlide(index)"
          >
            <span class="slide-indicator__dot"></span>
            <span class="slide-indicator__label">{{ slideLabel }}</span>
          </button>
        </li>
      </ol>
    </nav>
  </div>
</template>

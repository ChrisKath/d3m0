<template>
  <div class="ui--experience">
    <div class="container">
      <div class="ui--experience-grid">

        <div class="column x1">
          <h4 class="ui--info-h4">working with</h4>
          <h2 class="ui--info-h2">experience</h2>
          <p class="ui--info-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="column x2">
          <div class="ui--experience-list" v-for="(elm, idx) in store" :key="idx">
            <svg class="icon bi bi-calendar-week" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            </svg>

            <div class="title">
              <p v-text="elm.time"></p>
              <h4 v-text="elm.label"></h4>
            </div>

            <div class="desc" v-text="elm.desc"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class ExperienceContainer extends Vue {
  [propName: string]: any

  // __COMPUTED
  private get store (): any {
    return this.$store.getters['APP.CORE/experiences']
  }
}
</script>

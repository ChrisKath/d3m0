<template>
  <div :class="['ui--scrolltop', { show: active }]" title="Back to top">
    <button class="btn btn-text" @click="scrollToTop">
      <svg class="icon bi bi-arrow-up-short" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, PropOptions } from 'vue-class-component'

export default class ScrolltopComponent extends Vue {
  [propName: string]: any

  // __DATA
  private active: boolean = false

  // __METHODS
  private scrollToTop (): void {
    let c: number = window.scrollY

    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop)
      window.scrollTo(0, c - c / 14)
    }
  }

  private setListener (): void {
    const screenHeight: number = (window.innerHeight / 2)

    window.addEventListener('scroll', (): void => {
      this.active = (window.scrollY > screenHeight)
    }, false)
  }

  // __MOUNTED <Lifecycle Hooks>
  public mounted (): void {
    this.$nextTick(this.setListener)
  }
}
</script>

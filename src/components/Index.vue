<template>
  <div class="ui--index">
    <div class="parallax"></div>
    <div class="container">
      <div class="type">fullstack web developer</div>
      
      <div class="name">
        <h3 class="white">Hello, i am</h3>
        <h1 class="color">Got't Patiphat</h1>
      </div>

      <div class="desc">
        Web developer and UI/UX Designer with 4 years of experience.
        Learn about coding techniques for higher web performance.
      </div>

      <div class="action">
        <button class="btn btn-primary">download CV</button>
        <button class="btn btn-text">
          <svg class="icon bi bi-arrow-down-square" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
          </svg>
        </button>
      </div>

      <div class="arrow">
        <button class="btn btn-text" @click="next">
          <svg class="icon bi bi-arrow-down-short" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class IndexContainer extends Vue {
  [propName: string]: any

  // __METHODS
  private next (): void {
    const root: any = document.getElementById('app')
    const to: number = this.$el.clientHeight

    root.scrollTo({
      top: to,
      left: 0,
      behavior: 'smooth'
    })
  }
}
</script>

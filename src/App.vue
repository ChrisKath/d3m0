<template>
  <HeaderComponent />

  <router-view class="ui--router-view" />

  <FooterComponent />

  <teleport to="#teleport">
    <ScrollTopComponent v-if="ready" />
  </teleport>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import ScrollTop from '@/components/Scrolltop.vue'

@Options({
  components: {
    ScrollTopComponent: ScrollTop
  }
})
export default class Application extends Vue {
  [propName: string]: any

  // __DATA
  private ready: boolean = false

  // __METHODS
  private onReady (): void {
    let i: number = setInterval((): void => {
      if (this.$route.name) {
        this.ready = true
        clearInterval(i)
      }
    }, 1e3)
  }

  // __CREATED <Lifecycle Hooks>
  public created (): void {
    this.$store.dispatch('APP.DATA/pull', 'collects')
    this.$store.dispatch('APP.DATA/pull', 'experience')
    this.$store.dispatch('APP.DATA/pull', 'skills')
  }

  // __MOUNTED <Lifecycle Hooks>
  public mounted (): void {
    this.$nextTick(this.onReady)
  }
}
</script>
<template>
  <footer class="ui--footer">
    <p class="copyright">
      {{ appVersion }} | power by vue-3 (preview) &amp; firebase-hosting
    </p>
  </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class FooterComponent extends Vue {
  [propName: string]: any

  // __COMPUTED
  private get appVersion (): string {
    return this.$store.getters['APP.CORE/appVersion']
  }
}
</script>

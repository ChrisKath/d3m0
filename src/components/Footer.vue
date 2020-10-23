<template>
  <footer class="ui--footer">
    {{ appVersion }} | power by vue 3 (preview) &amp; firebase-hosting
  </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class FooterComponent extends Vue {
  [propName: string]: any

  private get appVersion (): string {
    return this.$attrs.version as string
  }
}
</script>

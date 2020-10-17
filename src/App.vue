<template>
  <div class="ui--hrader"></div>
  <router-view class="ui--router-view" />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Application extends Vue {
  [propName: string]: any

  // __MOUNTED <Lifecycle Hooks>
  public mounted (): void {
    console.log('🚀 Application Running...')
  }
}
</script>
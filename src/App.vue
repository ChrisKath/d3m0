<template>
  <HeaderComponent />

  <router-view class="ui--router-view" />

  <FooterComponent />

  <teleport to="body">
    <BackToTopComponent v-if="routeName" />
  </teleport>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import ScrollToTop from '@/components/ScrollToTop.vue'

@Options({
  components: {
    BackToTopComponent: ScrollToTop
  }
})
export default class Application extends Vue {
  [propName: string]: any

  private get routeName (): any {
    return this.$route.name
  }
}
</script>
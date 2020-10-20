<template>
  <div class="ui--index">

    <div class="ui--index-section sec-1">
      <HeroBannerComponent />
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Sec1 from './Components/1.vue'
import './style.less'

@Options({
  components: {
    HeroBannerComponent: Sec1
  }
})
export default class IndexContainer extends Vue {}
</script>

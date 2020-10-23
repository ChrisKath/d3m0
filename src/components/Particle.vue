<template>
  <div class="ui--particles"></div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class ParticleComponent extends Vue {
  [propName: string]: any

  private run (): void {
    const { particles }: any = window
    particles(this.$el, {
      dotColor: 'rgba(23, 217, 251, 0.5)',
      lineColor: 'rgba(23, 217, 251, 0.05)',
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      curvedLines: false,
      density: 4e4,                   // One particle every n pixels
      proximity: 80,                  // How close two dots need to be before they join
      parallaxMultiplier: 20,         // Lower the number is more extreme parallax
      particleRadius: 4,              // Dot size
    })
  }

  // __MOUNTED <Lifecycle Hooks>
  public mounted (): void {
    this.$nextTick(this.run)
  }
}
</script>

<style lang="less">
.ui--particles {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  transform: scale3d(0.5, 0.5, 1);
  pointer-events: none !important;
}
</style>

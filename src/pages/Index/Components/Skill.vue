<template>
  <div class="ui--skill">
    <div class="container">

      <div class="grid-content">
        <div class="grid-column x1">
          <h4 class="ui--info-h4">creative works</h4>
          <h2 class="ui--info-h2">skills</h2>
          <p class="ui--info-desc">
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </p>
        </div>

        <div class="grid-column x2">
          <div class="ui--skill-list" v-for="(elm, idx) in store.orderBy('order')" :key="idx">
            <span class="label" v-text="elm.label"></span>
            <span class="value" v-text="elm.value"></span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class SkillContainer extends Vue {
  [propName: string]: any

  // __COMPUTED
  private get store (): any[] {
    const results: any = this.$store.getters['APP.DATA/skills']
    return results.orderBy('order')
  }
}
</script>

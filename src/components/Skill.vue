<template>
  <div class="ui--skill">
    <div class="container">

      <div class="ui--skill-grid">
        <div class="column x1">
          <div class="ui--skill-list" v-for="(elm, idx) in store" :key="idx">
            <span class="label" v-text="elm.label"></span>
            <span class="value" v-text="elm.value"></span>
          </div>
        </div>

        <div class="column x2">
          <h4 class="ui--info-h4">skills</h4>
          <h2 class="ui--info-h2">creative works</h2>
          <p class="ui--info-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
  private get store (): any {
    return this.$store.getters['APP.CORE/skills']
  }
}
</script>

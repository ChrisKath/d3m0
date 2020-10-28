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
import { TypeSkill } from './type'

export default class SkillContainer extends Vue {
  [propName: string]: any

  // __DATA
  private dataset: TypeSkill[] = [
    { label: 'Web Performance', value: 75, order: 3 },
    { label: 'TypeScript', value: 75, order: 4 },
    { label: 'Vue JS', value: 90, order: 1 },
    { label: 'Node JS', value: 80, order: 2 },
    { label: 'Adobe XD', value: 40, order: 5 },
    { label: 'Photoshop', value: 50, order: 6 },
    { label: 'UI/UX Design', value: 60, order: 7 }
  ]

  // __COMPUTED
  private get store (): any[] {
    return (this.dataset as any).orderBy('order')
  }
}
</script>

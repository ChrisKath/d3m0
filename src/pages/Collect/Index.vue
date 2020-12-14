<template>
  <div class="ui--collect">
    <h1 class="ui--collect-title">collects</h1>

    <ul class="ui--collect-items">
      <li class="ui--collect-li" v-for="(elm, idx) in store" :key="idx">
        <img class="img" :src="getPoster(elm)">
        <div class="type" v-text="elm.type.label"></div>

        <div class="content">
          <h2 v-text="elm.title" @click="href(elm)"></h2>
          <p class="desc" v-text="elm.description"></p>
          <p class="create" v-text="getDate(elm.createdAt)"></p>
          <div class="tags">
            <span class="tag" v-for="(tag, key) in elm.tags" :key="key">
              {{ tag }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component'
import { dateTime } from '@/utils'
import './style.less'

export default class CollectContainer extends Vue {
  [propName: string]: any

  // __METHODS
  private getPoster (input: any): string {
    return `static/img/project/${input.id}/poster/${input.poster}`
  }

  private getDate (input?: any): string {
    return dateTime(input.toDate())
  }

  private href (input: any): void {
    if (input.href) window.open(input.href, '_blank')
  }

  // __COMPUTED
  private get store (): any {
    const results: any = this.$store.getters['APP.DATA/collects']
    return results.orderBy('order')
  }
}
</script>

<template>
  <div class="ui--collect">
    <div class="container">
      <div class="ui--collect-info">
        <h4 class="ui--info-h4">collects</h4>
        <h2 class="ui--info-h2">portfolio</h2>
      </div>

      <div class="ui--collect-item">

        <div class="ui--collect-list" v-for="(elm, idx) in store" :key="idx">
          <img class="image" :src="getImage(elm)" loading="lazy">
          <div class="type" v-text="elm.type.label"></div>

          <div class="content">
            <h2 v-text="elm.title"></h2>
            <p class="desc" v-text="elm.desc"></p>
            <p class="create" v-text="getDate(elm.createdAt)"></p>
            <div class="tags">
              <span class="tag" v-for="(tag, key) in elm.tags" :key="key">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import data from '@/store/project.json'

export default class CollectContainer extends Vue {
  [propName: string]: any

  // __DATA
  private dateTime: any = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' })

  // __METHODS
  private getImage (input: any): string {
    return `static/img/project/${input.id}/poster/${input.poster}`
  }

  private getDate (input?: any): string {
    let i: any = new Date(input)
    return this.dateTime.format(i)
  }

  // __COMPUTED
  private get store (): any {
    const results: any = data.slice(0, 9)
    return results.orderBy('order')
  }
}
</script>

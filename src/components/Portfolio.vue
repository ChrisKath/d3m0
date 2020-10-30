<template>
  <div class="ui--portfolio">
    <div class="container">

      <div class="grid-content">
        <div class="grid-column x1">
          <h2 class="ui--info-h2">portfolio</h2>

          <ul class="ui--portfolio-menu">
            <li v-for="(elm, idx) in menu" :key="idx" @click="select(elm.id)"
              :class="[
              'ui--portfolio-menu-list',
              { active: elm.active }
              ]">
              {{ elm.label }}
            </li>
          </ul>

          <p class="ui--info-desc">
            It doesn't matter how great your product or service is if your copy does not captivate your audience.
          </p>
        </div>

        <div class="grid-column x2">
          <ul class="ui--portfolio-item">

            <li class="ui--portfolio-item-list" v-for="(elm, idx) in store" :key="idx">
              <img class="image" :src="getImage(elm)" loading="lazy">
              <div class="overlay"></div>
              <div class="top">
                <a class="link" :href="elm.href" target="_blank" v-if="elm.href">link</a>
                <span class="type" v-text="elm.type.label"></span>
              </div>
              <div class="info">
                <h2 class="name" v-text="elm.title"></h2>
                <p class="desc" v-text="elm.desc"></p>
              </div>
            </li>

          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import data from '@/store/project.json'

export default class PortfolioContainer extends Vue {
  [propName: string]: any

  // __DATA
  private currentFilter: number = 0
  private menuSet: any = [
    { id: 0, label: 'all' },
    { id: 1, label: 'designs' },
    { id: 2, label: 'web apps' }
  ]

  // __METHODS
  private select (input: number): void {
    this.currentFilter = input
  }

  private getImage (input: any): string {
    return `static/img/project/${input.id}/poster/${input.poster}`
  }

  // __COMPUTED
  private get store (): any {
    let results: any = data

    if (this.currentFilter) {
      results = data.filter((elm: any): boolean => {
        return (elm.type.id === this.currentFilter)
      })
    }

    return results
      .slice(0, 6)
      .orderBy('order')
  }

  private get menu (): any {
    return this.menuSet.map((elm: any, index: number): any => ({
      ...elm,
      active: (elm.id === this.currentFilter)
    }))
  }
}
</script>

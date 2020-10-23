<template>
  <HeaderComponent />

  <IndexContainer />
  <PortfolioContainer />
  <ExperienceContainer />
  <SkillContainer />

  <FooterComponent :version="appVersion" />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Index from '@/components/Index.vue'
import Portfolio from '@/components/Portfolio.vue'
import Experience from '@/components/Experience.vue'
import Skill from '@/components/Skill.vue'

@Options({
  components: {
    IndexContainer: Index,
    PortfolioContainer: Portfolio,
    ExperienceContainer: Experience,
    SkillContainer: Skill
  }
})
export default class Application extends Vue {
  [propName: string]: any

  // __DATA
  private appVersion: string = 'v2.0 (oct, 2020)'

  // __MOUNTED <Lifecycle Hooks>
  public mounted (): void {
    console.log('🚀 Application Running...')
  }
}
</script>
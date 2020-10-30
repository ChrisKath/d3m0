<template>
  <HeaderComponent />

  <IndexContainer />
  <PortfolioContainer />
  <ExperienceContainer />
  <SkillContainer />

  <FooterComponent />

  <teleport to="body">
    <BackToTopComponent />
  </teleport>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Index from '@/components/Index.vue'
import Portfolio from '@/components/Portfolio.vue'
import Experience from '@/components/Experience.vue'
import Skill from '@/components/Skill.vue'
import Top from '@/components/Top.vue'

@Options({
  components: {
    IndexContainer: Index,
    PortfolioContainer: Portfolio,
    ExperienceContainer: Experience,
    SkillContainer: Skill,
    BackToTopComponent: Top
  }
})
export default class Application extends Vue {
  [propName: string]: any
}
</script>
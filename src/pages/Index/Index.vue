<template>
  <IndexContainer />
  <PortfolioContainer />
  <ExperienceContainer />
  <SkillContainer />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Index from './Components/Index.vue'
import Portfolio from './Components/Portfolio.vue'
import Experience from './Components/Experience.vue'
import Skill from './Components/Skill.vue'
import './style.less'

@Options({
  components: {
    IndexContainer: Index,
    PortfolioContainer: Portfolio,
    ExperienceContainer: Experience,
    SkillContainer: Skill
  }
})
export default class IndexContainer extends Vue {
  [propName: string]: any
}
</script>

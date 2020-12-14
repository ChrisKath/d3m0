<template>
  <div class="ui--index">
    <CoverContainer />
    <CollectContainer />
    <ExperienceContainer />
    <SkillContainer />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Cover from './Components/Cover.vue'
import Collect from './Components/Collect.vue'
import Experience from './Components/Experience.vue'
import Skill from './Components/Skill.vue'
import './style.less'

@Options({
  components: {
    CoverContainer: Cover,
    CollectContainer: Collect,
    ExperienceContainer: Experience,
    SkillContainer: Skill
  }
})
export default class IndexContainer extends Vue {
  [propName: string]: any
}
</script>

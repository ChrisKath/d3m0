<template>
  <div class="ui--portfolio">
    <div class="container">

      <div class="ui--portfolio-grid">
        <div class="column x1">
          <h2 class="ui--info-h2">portfolio</h2>

          <ul class="ui--portfolio-menu">
            <li class="ui--portfolio-menu-list active">all</li>
            <li class="ui--portfolio-menu-list">designs</li>
            <li class="ui--portfolio-menu-list">webapps</li>
          </ul>

          <p class="ui--info-desc">
            It doesn't matter how great your product or service is if your copy does not captivate your audience
          </p>
        </div>

        <div class="column x2">.content</div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class PortfolioContainer extends Vue {
  [propName: string]: any
}
</script>

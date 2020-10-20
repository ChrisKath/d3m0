<template>
  <header class="ui--header">
    
    <div class="ui--header-logo">text logo</div>

    <div class="ui--header-contact">
      <div class="ui--header-contact-tel">
        <svg class="icon bi bi-phone" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        <a class="text" href="tel:+66946040222">(+66) 94-604-0222</a>
      </div>

      <div class="ui--header-contact-email">
        <svg class="icon bi bi-envelope-open" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z"/>
        </svg>
        <a class="text" href="mailto:pinn.project@outlook.com">pinn.project@outlook.com</a>
      </div>
    </div>

  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class HeaderComponent extends Vue {
  [propName: string]: any
}
</script>

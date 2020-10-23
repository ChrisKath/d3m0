<template>
  <div class="ui--nav">
    <i class="ui--nav-1"></i>
    <i class="ui--nav-2"></i>
    <i class="ui--nav-3"></i>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class NavComponent extends Vue {
  [propName: string]: any
}
</script>

<style lang="less">
.ui--nav {
  position: fixed;
  top: 28px;
  left: 40px;
  z-index: 110;

  display: grid;
  grid-row-gap: 6px;
  padding: 10px 0;
  width: 32px;
  cursor: pointer;
  transition: width 0.3s ease;

  &:hover {
    width: 34px;
    i { width: 100% }
  }

  i {
    display: block;
    height: 3px;
    border-radius: 2px;
    background-color: white;
    transition: width 0.4s ease;
  }

  // &-1 { width: 100% }
  &-2 { width: 80% }
  &-3 { width: 90% }
}
</style>

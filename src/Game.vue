<template lang="jade">
  managers
  money
  items
</template>

<script>
  import Managers from 'src/components/Managers'
  import Money from 'src/components/Money'
  import Items from 'src/components/Items'
  import store from 'src/services/store'

  export default {
    name: 'Game',
    components: { Managers, Money, Items },
    store
  }
</script>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
</style>

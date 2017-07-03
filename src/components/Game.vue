<template lang="pug">
  div
    reset
    managers
    quantity
    div
      gems
      upgrade
      money
    items
</template>

<script>
  import Managers from 'src/components/Managers'
  import Reset from 'src/components/Reset'
  import Upgrade from 'src/components/Upgrade'
  import Quantity from 'src/components/Quantity'
  import Gems from 'src/components/Gems'
  import Money from 'src/components/Money'
  import Items from 'src/components/Items'
  import store from 'src/services/store'

  export default {
    name: 'Game',
    components: { Managers, Reset, Upgrade, Gems, Money, Items, Quantity },
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
    height: 766px;
  }
</style>

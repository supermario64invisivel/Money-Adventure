<template lang="jade">
  managers
  quantity
  div
    gems
    money
  items
</template>

<script>
  import Managers from 'src/components/Managers'
  import Quantity from 'src/components/Quantity'
  import Gems from 'src/components/Gems'
  import Money from 'src/components/Money'
  import Items from 'src/components/Items'
  import store from 'src/services/store'

  export default {
    name: 'Game',
    components: { Managers, Gems, Money, Items, Quantity },
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

<template lang="jade">
  div.upgrade-all(v-if="upgrades[nextUpgrade]")
    button(v-on:click="upgrade()")
      | Upgrade X {{ upgrades[nextUpgrade].amount }}
      br
      | $ {{ upgrades[nextUpgrade].price | amount }}
</template>

<style>
  div.upgrade-all {
    display: inline-block;
    min-width: 194px;
  }

  div.upgrade-all button {
    font-family: sans-serif;
    font-size: 9pt;
    line-height: 12pt;
    width: 115px;
    vertical-align: middle;
  }
</style>

<script>
  import actions from 'core/items/actions'
  import { upgradeAll } from 'core/items/upgrades'

  export default {
    name: 'Upgrade',
    data: () => ({
      upgrades: upgradeAll
    }),
    vuex: {
      getters: {
        nextUpgrade: state => state.nextUpgrade
      },
      actions: {
        upgrade: actions.upgradeAll
      }
    }
  }
</script>

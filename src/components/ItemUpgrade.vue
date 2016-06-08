<template lang="jade">
  div.item-upgrade(v-if="item.upgrades[item.nextUpgrade]")
    button(v-on:click="upgrade(item)")
      | Upgrade X {{ item.upgrades[item.nextUpgrade].amount }}
      br
      | $ {{ item.upgrades[item.nextUpgrade].price | amount }}
</template>

<style>
  div.item-upgrade {
    display: inline-block;
    padding-top: 8px;
    margin-left: 15px;
  }

  div.item-upgrade button {
    font-family: sans-serif;
    font-size: 9pt;
    line-height: 12pt;
    width: 115px;
  }
</style>

<script>
  import actions from 'core/items/actions'

  export default {
    name: 'ItemProgress',
    props: ['item'],
    vuex: {
      actions: {
        upgrade: actions.upgradeItem
      }
    }
  }
</script>

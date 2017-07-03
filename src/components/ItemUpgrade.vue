<template lang="pug">
  div.item-upgrade(v-if="item.upgrades[item.nextUpgrade]")
    button(v-on:click="upgradeItem(item)")
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
  import { mapActions } from 'vuex'

  export default {
    name: 'ItemUpgrade',
    props: ['item'],
    methods: mapActions(['upgradeItem'])
  }
</script>

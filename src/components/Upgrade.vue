<template lang="pug">
  div.upgrade-all(v-if="upgrades[nextUpgrade]")
    button(v-on:click="upgradeAll()")
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
  import { mapState, mapActions } from 'vuex'
  import { upgradeAll } from 'core/items/upgrades'

  export default {
    name: 'Upgrade',
    data: () => ({
      upgrades: upgradeAll
    }),
    computed: mapState({
      nextUpgrade: state => state.nextUpgrade
    }),
    methods: mapActions(['upgradeAll'])
  }
</script>

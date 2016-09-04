<template lang="jade">
  div.money
    | $ {{ money | amount }}
</template>

<style>
  div.money {
    display: inline-block;
    color: gray;
    font-family: sans-serif;
    font-size: 21pt;
    text-align: left;
    min-width: 335px;
    margin-bottom: 0.6em;
  }
</style>

<script>
  export default {
    name: 'Money',
    vuex: {
      getters: {
        money: state => state.money
      }
    }
  }
</script>

<template lang="pug">
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
    min-width: 230px;
    margin-bottom: 0.6em;
  }
</style>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Money',
    computed: mapState({
      money: state => state.money
    })
  }
</script>

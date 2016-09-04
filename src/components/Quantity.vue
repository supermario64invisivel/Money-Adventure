<template lang="jade">
  div.quantity
    button(v-on:click="cycleQuantity")
      | Buy x {{ qty }}
</template>

<style>
  div.quantity {
    height: 33px;
    margin-bottom: 30px;
    min-width: 270px;
    text-align: right;
  }
  div.quantity button {
    display: inline-block;
    margin-left: 1em;
    background: orange;
    font-family: sans-serif;
    font-size: 12pt;
    border-color: orange;
    border-radius: 13px;
  }
</style>

<script>
  import actions from 'core/items/actions'

  export default {
    name: 'Quantity',
    vuex: {
      getters: {
        items: state => state.items,
        qty: state => state.qty
      },
      actions: {
        cycleQuantity: actions.cycleQuantity
      }
    }
  }
</script>

<template lang="jade">
  div.item-progress
    div.item-time
      span.value
        | &nbsp; ${{ item | profit | amount }}
      span.progress(v-bind:style="{ width: item.progress + '%' }")
    div.item-buy
      div.item-quantity
        | {{ item.quantity }}
      button(v-on:click="buy(item)")
        | Buy +{{ qty }} per ${{ item.qtyPrice | amount }}
</template>

<style>
  div.item-progress {
    padding-top: 5px;
  }

  div.item-time {
    border: 1px solid gray;
    border-radius: 2px;
    height: 40px;
    width: 100px;
  }

  div.item-buy {
    margin-top: 6px;
  }

  div.item-quantity {
    display: inline-block;
    font-family: sans-serif;
    font-size: 9pt;
    border: 1px solid gray;
    border-radius: 12px;
    padding: 3px;
    margin-right: 3px;
  }

  div.item-buy button {
    font-size: 8pt;
    color: blue;
  }

  span.value {
    font-size: 11pt;
    font-family: sans-serif;
    display: block;
    line-height: 39px;
    vertical-align: middle;
    overflow: hidden;
    position: absolute;
  }

  span.progress {
    display: block;
    height: 100%;
    background-color: rgb(43,194,83);
    background-image: linear-gradient(
      center bottom,
      rgb(43,194,83) 37%,
      rgb(84,240,84) 69%
    );
    box-shadow:
      inset 0 2px 9px  rgba(255,255,255,0.3),
      inset 0 -2px 6px rgba(0,0,0,0.4);
  }
</style>

<script>
  import actions from 'core/items/actions'

  export default {
    name: 'ItemProgress',
    props: ['item'],
    vuex: {
      getters: {
        qty: state => state.qty
      },
      actions: {
        buy: actions.buyItem
      }
    }
  }
</script>

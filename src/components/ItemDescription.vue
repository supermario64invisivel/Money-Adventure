<template lang="pug">
  div.item-description
    div.item-name
      | {{ item.name }}
    div.item-image(v-on:click="produceItem(item)")
      img(v-bind:src="item.image")
</template>

<style>
  div.item-description {
    text-align: center;
    width: 90px;
  }

  div.item-name {
    font-family: sans-serif;
    font-size: 10pt;
    color: gray;
  }

  div.item-image img {
    border: 1px solid gray;
    border-radius: 30px;
    margin-top: 5px;
    padding: 9px;
    box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.55);
    cursor: pointer;
  }
</style>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'ItemDescription',
    props: ['item'],
    methods: mapActions(['produceItem'])
  }
</script>

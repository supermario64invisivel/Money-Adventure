<template lang="jade">
  div.items
    div.item(v-for="item in items")
      item(:item="item")
</template>

<style>
  div.items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
  }
  div.item {
    display: flex;
    margin: 11px 5px;
  }
</style>

<script>
  import Item from 'src/components/Item'
  import processItems from 'core/items/process'

  export default {
    name: 'Items',
    components: { Item },
    vuex: {
      getters: {
        items: state => state.items
      }
    },
    ready: processItems
  }
</script>

<template lang="pug">
  div.item
    item-description(:item="item")
    item-progress(:item="item")
    item-upgrade(:item="item")
</template>

<style>
  div.item {
    display: flex;
    margin: 11px 5px;
  }
</style>

<script>
  import ItemDescription from './ItemDescription'
  import ItemProgress from './ItemProgress'
  import ItemUpgrade from './ItemUpgrade'

  export default {
    name: 'Item',
    props: ['item'],
    components: {
      ItemDescription,
      ItemProgress,
      ItemUpgrade
    }
  }
</script>

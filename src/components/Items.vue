<template lang="pug">
  div.items
    item(v-for="item in items" :item="item")
</template>

<style>
  div.items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    height: 513px;
  }
</style>

<script>
  import { mapState } from 'vuex'
  import Item from 'src/components/Item'
  import processItems from 'core/items/process'

  export default {
    name: 'Items',
    components: { Item },
    computed: mapState({
      items: state => state.items
    }),
    mounted: processItems
  }
</script>

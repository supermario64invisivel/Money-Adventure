<template lang="jade">
  item-description(:item="item")
  item-progress(:item="item")
  item-upgrade(:item="item")
</template>

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

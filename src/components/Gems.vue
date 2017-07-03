<template lang="pug">
  div.gems
    img(src="http://pix.iemoji.com/images/emoji/apple/ios-9/256/gem-stone.png")
    span
      | {{ gems }}
</template>

<style>
  div.gems {
    display: inline-block;
    color: blue;
    font-family: sans-serif;
    font-size: 21pt;
    text-align: left;
    min-width: 242px;
    margin-bottom: 0.6em;
    line-height: 45px;
  }
  div.gems img {
    width: 45px;
    height: 45px;
    vertical-align: middle;
    margin-right: 9px;
  }
  div.gems span {
    vertical-align: middle;
  }
</style>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Gems',
    computed: mapState({
      gems: state => state.gems
    })
  }
</script>

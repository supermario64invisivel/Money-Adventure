<template lang="pug">
  div.managers
    select(v-model="selected")
      option(value="-1")
        | Select Manager
      template(v-for="(item, index) in items")
        option(v-if="! item.manager", :value="index")
          | {{ item.managerName }} - $ {{ item.managerPrice | amount }}
    button(v-if="selected > -1", v-on:click="getManager(items[selected])")
      | Hire!
</template>

<style>
  div.managers {
    color: gray;
    font-family: sans-serif;
    font-size: 21pt;
    text-align: left;
    min-width: 270px;
    margin-top: 1em;
    margin-bottom: 1.5em;
  }
  div.managers button {
    margin-left: 1em;
  }
</style>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Managers',
    computed: mapState({
      items: state => state.items
    }),
    data: () => ({
      selected: -1
    }),
    methods: {
      ...mapActions(['hireManager']),
      getManager: function (item) {
        this.hireManager(item)
        if (item.manager) {
          this.selected = -1
        }
      }
    }
  }
</script>

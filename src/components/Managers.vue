<template lang="jade">
  div.managers
    select(v-model="selected")
      option(value="-1")
        | Select Manager
      template(v-for="item in items")
        option(v-if="! item.manager", value="{{ $index }}")
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
    margin-bottom: 3em;
  }
  div.managers button {
    margin-left: 1em;
  }
</style>

<script>
  import actions from 'core/items/actions'

  export default {
    name: 'Managers',
    vuex: {
      getters: {
        items: state => state.items
      },
      actions: {
        hireManager: actions.hireManager
      }
    },
    data: () => ({
      selected: -1
    }),
    methods: {
      getManager: function (item) {
        this.hireManager(item)
        this.selected = -1
      }
    }
  }
</script>

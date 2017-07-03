<template lang="pug">
  a.reset
    | RESET → 3 GEMS
</template>

<style>
.reset {
  background: #00ff1e;
  background-image: -webkit-linear-gradient(top, #00ff1e, #338c2e);
  background-image: -moz-linear-gradient(top, #00ff1e, #338c2e);
  background-image: -ms-linear-gradient(top, #00ff1e, #338c2e);
  background-image: -o-linear-gradient(top, #00ff1e, #338c2e);
  background-image: linear-gradient(to bottom, #00ff1e, #338c2e);
  -webkit-border-radius: 30;
  -moz-border-radius: 30;
  border-radius: 30px;
  text-shadow: 1px 1px 3px #666666;
  -webkit-box-shadow: 0px 1px 3px #666666;
  -moz-box-shadow: 0px 1px 3px #666666;
  box-shadow: 0px 1px 3px #666666;
  font-family: Arial;
  color: #ffffff;
  font-size: 18px;
  padding: 8px 16px 8px 16px;
  text-decoration: none;
  float: right;
  margin-top: 25px;
  cursor: pointer;
}

.reset:hover {
  background: #3ec759;
  background-image: -webkit-linear-gradient(top, #3ec759, #4af764);
  background-image: -moz-linear-gradient(top, #3ec759, #4af764);
  background-image: -ms-linear-gradient(top, #3ec759, #4af764);
  background-image: -o-linear-gradient(top, #3ec759, #4af764);
  background-image: linear-gradient(to bottom, #3ec759, #4af764);
  text-decoration: none;
}
</style>

<script>
  export default {
    name: 'Reset'
  }
</script>

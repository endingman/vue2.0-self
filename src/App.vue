<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">Go to index</router-link>
      <router-link to="/hello">Go to Hello</router-link>
      <router-link to="/method">Go to Method</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>


<style lang="stylus" rel="stylesheet/stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
</style>

<template>
  <div id="app">
    <div id="nav">
      <Nav/>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/Nav';

export default {
  components: {
    Nav
  }
}

</script>
<style>
/*  -- CHARTE GRAPHIQUE --
bleu clair : #00D9FF
bleu foncé : #0071FB
blanc et noir
Police: Avenir, Helvetica, Arial, sans-serif*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

* {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.centerTitle {
  text-align: center;
}

body {
  margin: 0;
}
</style>

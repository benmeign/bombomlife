<template>
  <div id="app">
    <div class="block">
    <nav class="nav">

      <div class="nav-left">
        <a class="nav-item" href="/">
        <span class="icon">
                  <img src="./assets/buddha-green.png" alt="Profile" height="28">
        </span>
        </a>
      </div>
      
      <div class="nav-center">
        <a class="nav-item" href="/">
        <img src="./assets/logoold.png" alt="BomBomLife" height="42">
        </a>
      </div>

      <div class="nav-right">
        <a class="nav-item" href="/">
        <span class="icon">
           <img src="./assets/lotus-green.png" alt="Profile" height="28">
        </span>
        </a>
      </div>

    </nav>
    </div>


    <img >
    <router-view></router-view>

    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>BomBomLife</strong> x <a href="http://ironhack.com">Ironhack</a>
      </p>
      <p>
        <a class="icon" href="xx">
          <i class="fa fa-facebook"></i>
        </a>
      </p>
      </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <nav id="nav">
      <router-link to="{name:'Home'}">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;1,200;1,300&display=swap');
body {
  background: linear-gradient(
    90deg,
    rgba(246, 70, 76, 1) 50%,
    rgba(248, 116, 85, 1) 100%
  );
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  position: relative;
}

#nav {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  text-align: center;
}

#nav a {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>

<template>
  <div>
    <nav>
      <router-link to="/">채팅</router-link> |
      <router-link to="/about">채팅목록</router-link> |
      <router-link to="/Main">Main</router-link> |
    </nav>
    <router-view />
  </div>
  <div>
    <button @click="clickList()">Query 프로그래밍 방식</button>
  </div>
  <router-link
    :to="{ name: 'Query', query: { name: 'Query선언적 방식', age: 10 } }"
    >Query선언적방식 |
  </router-link>
  <router-link
    :to="{ name: 'Params', params: { name: 'Params선언적 방식', age: 10 } }"
    >Params선언적 방식
  </router-link>
</template>

<script>
export default {
  name: 'App',
  methods: {
    clickList() {
      this.$router.push({
        name: 'Query',
        query: { name: 'Query선언적 방식', age: 10 }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

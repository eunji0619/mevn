<template>
  <div class="ex4">
    <button
      v-for="p in pages"
      :key="p"
      @click="page = p"
      :class="{ active: page == p }"
    >
      {{ p }}
    </button>
  </div>
  <div v-for="(p, i) in pages" :key="i">
    <div v-if="p == page">
      {{ p }}
      <br />
      <img :src="'../../sample' + (i + 1) + '.jpg'" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  },
  methods: {}
}
</script>

<style scoped>
button {
  scale: 150%;
  background-color: white;
  margin: 30px;
  cursor: pointer;
}
button:hover {
  background-color: rgb(194, 174, 212);
}
button.active {
  color: white;
  background-color: rgb(102, 149, 219);
}
img {
  width: 380px;
  height: 500px;
}
</style>

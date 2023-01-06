<template>
  <div>
    <h1>Params 연습입니다.</h1>
    <h2>name:{{ $route.params.name }}</h2>
    <h2>age:{{ $route.params.age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Params',
  create() {
    console.log(this.$route.params.name)
    console.log(this.$route.params.age)
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style></style>

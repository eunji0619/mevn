<template>
  <div class="translate">
    <input type="radio" v-model="radioValues" value="한국어" />
    <input type="radio" v-model="radioValues" value="영어" />
    {{ radioValues }}
    <textarea name="inputText" cols="30" rows="10"></textarea>
    <textarea name="resultText" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  name: 'translate',
  data() {
    return {
      radioValues: ''
    }
  },
  methods: {}
}
</script>

<style></style>

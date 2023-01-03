<template>
  <div class="home">
    <textarea disabled v-model="textarea" id="message"></textarea>
    <input
      v-model="message"
      autocomplete="off"
      type="text"
      @keyup.enter="sendMessage()"
    />
    <button @click="sendMessage()">전송</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  created() {
    this.$socket.on('chat', (data) => {
      window.scrollTo(0, document.body.scrollHeight)
      this.textarea += data.message + '\n'
    })
  },
  data() {
    return {
      textarea: '',
      message: ''
    }
  },
  methods: {
    sendMessage() {
      this.$socket.emit('chat', { message: this.message })
      this.message = ''
    }
  },
  components: {}
}
</script>

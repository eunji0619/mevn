<template>
  <div class="modal">
    <div class="modal-body">
      <div>변경되었습니다.😊</div>
    </div>
  </div>

  <div id="container">
    <div id="chatid1">
      <span
        >대화명
        <input
          type="text"
          id="chatidi"
          @input="myname = $event.target.value"
          placeholder="대화명을 입력해주세요"
        />
        <input type="submit" value="확인" @click="makeName()" />
      </span>
      <span v-if="myname !== '익명'">대화명 : {{ myname }}</span>
    </div>
    <div id="messages">
      <div class="chat-line" v-for="(chat, i) in chatData" :key="i">
        {{ chat }}
      </div>
    </div>
    <div id="chatid2">
      귓속말:
      <input type="checkbox" @click="ck = $event.target.checked" />
      <input :disabled="!ck" v-model="toname" placeholder="상대 이름" />에게
    </div>
    <div id="send">
      <input
        type="text"
        id="input"
        v-model="message"
        autocomplete="off"
        @keyup.enter="sendMassage()"
      />
      <button @click="sendMassage()">전송</button>
    </div>
  </div>
</template>

<script></script>

<script>
export default {
  name: 'chat',
  setup() {},
  created() {
    this.$socket.on('chat', (data) => {
      console.log(data)
      this.chatData.push(data)
    })
  },
  data() {
    return {
      myname: '',
      ck: false,
      toname: '',
      chatData: [],
      message: '',
      modalon: false
    }
  },
  methods: {
    makeName() {
      console.log('나중에 씀')
    },
    sendMassage() {
      this.$socket.emit('chat', {
        message: this.message,
        id: this.myname,
        toid: this.toname
      })
      console.log(this.message)
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  min-height: 500px;
  margin: 0;
  padding-bottom: 3em;
}
#container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
#messages {
  height: 450px;
  background-color: #f1eaea;
  text-align: left;
  overflow-y: auto;
}
#send {
  margin: 5px;
  padding: 5px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
#chatid1 {
  display: flex;
  justify-content: space-between;
}
#chatid2 {
  text-align: right;
  margin-right: 5px;
}
#input {
  height: 100%;
  width: 60%;
  border: 1px solid rgb(197, 197, 197);
  padding: 0 16px;
  flex-grow: 1;
  border-radius: 10px;
}
button {
  width: 25%;
  height: 100%;
  background-color: black;
  border: none;
  padding: 0.1em;
  margin: 4px;
  border-radius: 5px;
  outline: none;
  color: #fff;
}
</style>

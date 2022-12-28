<template>
  <div class="ex1">
    <h1>안녕하세요.{{ vname }}입니다. 데뷔한지 {{ age }}일 입니다.</h1>
    <button @click="func('안녕 팝업이당.')">버튼입니둥</button>
    <button @dblclick="func('안녕 팝업이당.')">더블클릭이락우</button>
    <!-- v-on:click -->

    <hr />
    <h1 v-if="status">제가 보이나요?</h1>
    <!-- 조건이 맞으면 보이게 됨 -->
    <h1 v-show="status">제가 보이나요?</h1>
    <button v-on:click="status = true">보이게 할게요</button>
    <button v-on:click="status = false">숨길고야</button>
    <button v-on:click="status = !status">보이면 숨기고 안보이면 보이게</button>
    <hr />
    <input
      type="text"
      v-model="inData"
      v-on:keyup="func(inData + '다 적었다.')"
    />
    <!-- 양방향 : v-model -->
    <input
      type="text"
      v-model="inData"
      v-on:keyup.enter="func(inData + '다 적었다.')"
    />
    <!-- 양방향 : v-model -->
    <h2>{{ inData }}</h2>
    <div class="e" v-for="(e, i) in list" :key="i">
      <div class="i">
        <img v-bind:src="e" alt="" />
      </div>
    </div>
    <hr />
    <h3>v-for 사용하기 {{ arrData }}</h3>
    <button>추가하기</button>
    <button>삭제하기</button>
    <ul>
      <li v-for="data in arrData" :key="data">{{ data }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      vname: '마마무',
      age: 3110,
      status: true,
      inData: '',
      list: [
        {
          img: 'https://wnghdcjfe.github.io/1.png',
          msg: '홍길동, 날렵하군'
        }
      ]
    }
  },
  methods: {
    func: function (text) {
      alert(text)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
button {
  margin: 0 10px;
}
</style>

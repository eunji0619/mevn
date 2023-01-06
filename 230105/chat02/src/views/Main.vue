<template>
  <h1>페이지</h1>
  <sbMain :sbData1="data1"></sbMain>
</template>

<script>
import sbMain from './Main_sub.vue'
export default {
  name: 'app',
  data() {
    return {
      data1: 'Main에서 서브로 가져온 sbData1 내용입니다.',
      data2: 'Main에서 서브로 가져온 sbData2 내용입니다.'
    }
  },
  methods: {},
  components: { sbMain }
}
</script>

<style></style>

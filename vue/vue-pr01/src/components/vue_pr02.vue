<template>
    <input type="text">
    <button v-on:click="status=!status">버튼 입니둥</button>
    <table v-if = 'status'></table>
</template>

<script>
export default {
    name: 'app',
    data(){
        return{
            status : false,
            
        }
    }
}
</script>

<style>
</style>
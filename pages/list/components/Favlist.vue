<template>
    <div v-for="n in 5">{{msg}}</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    html{
        background: yellow;
    }
</style>

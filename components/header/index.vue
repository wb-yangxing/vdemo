<template>
    <div class="cm-header">
            <span class="cm-header-icon fl" @click="back">
                <i class="icon-back"></i>
            </span>
        <h1 class="cm-header-title">
            <span class="cm-title-l">{{title}}</span>
        </h1>
    </div>
</template>

<script>
module.exports = {
    props: ['title'],
    events: {

    },
    methods: {
        back: function(){
            this.$dispatch('back')
        }
    }
}
</script>

<style lang="less">
.cm-header{
    font-size: .9rem;
    height: 2.2rem;
    line-height: 2.2rem;
    text-align: center;
    background-color: #099fde;
    color: #fff;
    border-bottom: 1px solid #FFF;
}
.cm-header-title{
    margin: 0 4rem;
}
.cm-header-icon{
    width: 2.2rem;
    height: 2.2rem;
    line-height: 2.2rem;
    .icon-back{
        &:before {
            content: "";
            display: inline-block;
            width: .5rem;
            height: .5rem;
            vertical-align: middle;
            border-left: .1rem solid #fff;
            border-bottom: .1rem solid #fff;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            box-sizing: border-box;
        }
    }
}
</style>

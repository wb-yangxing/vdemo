<template>
    <div class="cm-header">
            <span class="cm-header-icon fl">
                <i class="icon-back"></i>
            </span>
            <span class="cm-header-icon fr">
                <i class="iconfont icon-map"></i><!--11-->
            </span>
        <h1 class="cm-page-title">
            <span class="cm-title-l">上海 - 杭州</span>
            <p class="cm-title-s">共12条</p>
        </h1>
    </div>
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
.cm-header{
    top: 0;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #099fde;
    color: #fff;
    z-index: 960;
}
</style>

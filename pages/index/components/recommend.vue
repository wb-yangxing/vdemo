<template>
    <h4 class="bus-recomd-tit" v-show="ressage" style="margin-bottom:0.2rem">{{ressage}}</h4>
    <article class="bus-list-recomd" v-for="item in recommendData" v-on:click="clickRecommendAction(item)" v-show="item.title && item.url && item.price">
        <i class="ico-ribbon" v-show="item.tag"><span class="ico-ribbon-txt">{{item.tag}}</span></i>
        <img :src="item.imgUrl" class="bus-recomd-img" />
        <div class="bus-recomd-bd">
            <p>{{item.title}}<span v-show="item.feature" class="tag-orage">{{item.feature}}</span><span class="bus-price"><dfn>¥</dfn><strong>{{item.price}}</strong><span>{{item.unit}}</span>起</span></p>
            <h4>{{item.subtitle}}</h4>
        </div>
        <ul class="recomd-pt" v-show="item.services && item.services.length">
            <li v-for = "stem in item.service">stem</li>
        </ul>
    </article>
</template>

<script>
    export default {
        data () {
            return {
                ressage: "",
                recommendData: [{"recommendType":"air","imgUrl":"http://pic.c-ctrip.com/h5/train/bus_recomd/flight.png","title":"2时15分","subtitle":"上海-北京","from":"上海","to":"北京","useTime":"2时15分","price":100,"url":"http://m.fat19.qa.nt.ctripcorp.com/html5/flight/SHA-BJS-day-1.html?ddate1=2016-06-29&hideHead=1&headColor=14b9d6","tag":"","feature":"更省时","services":[]},{"from":"上海","to":"北京","price":156.5,"url":"http://m.ctrip.com/webapp/train/home/list?dStationName=上海&aStationName=北京&dDate=2016-06-29&allianceid=999&sid=999&ouid=qichepiao_h5&sourceid=9","imgUrl":"http://pic.c-ctrip.com/h5/train/bus_recomd/train.png","unit":"","title":"火车票","subtitle":"上海-北京","tag":"","feature":"","services":[],"recommendType":"train"}]
            }
        }
    }
</script>

<style>
    html{
        background: yellow;
    }
</style>

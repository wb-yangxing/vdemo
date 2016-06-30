import Vue from 'vue'
import main from 'styles/bus/bus-base.less'
import XHeader from 'coms/header'
import recommend from './components/recommend'
import list from './components/list'
import BaseModel from 'models/basemodel'
import BusModel from 'models/busmodel'

var vm = new Vue({
	el: 'body',
	components: { XHeader ,recommend, list},
	data: {
		list: []
	}
})

var listModel = new BaseModel(BusModel.list);
listModel.setParam({
	"fromCity":"上海",
	"toCity":"西塘",
	"fromDate":"2016-07-01",
	"utmsource":null,
	"sortType":"asc",
	"fromStationName":[],
	"toStationName":[],
	"fromTimeRange":[],
	"pageNum":1,
	"isPointBus":false,
	"head":{"cid":"09031025310288221320","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":"B34A3B7B3DA0A3E285DAAC4543ABBF3D40C7D0D031941E5325D48FD65889DDB3","extension":[{"name":"protocal","value":"http"}]},
	"contentType":"json"
})

listModel.execute(function(data){
	console.log(data);
	vm.list = data.return.data;
}, function(data){

}, this)
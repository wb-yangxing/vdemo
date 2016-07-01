import Auto from "common/auto"
import Vue from 'vue'
import XHeader from 'coms/header'
import Fetch from 'common/fetch'
import Store from 'common/store'
import BaseModel from 'models/basemodel'

import airportbus from 'styles/airportbus/airportbus.less'
import styleindex from './index.less'
new Vue({
	el: 'body',
	data: {
		title: "机场巴士"
	},
	components: { XHeader },
	methods: {
		back: function(){
			console.log(this);
		}
	}
})

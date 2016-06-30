import Vue from 'vue'
import Favlist from './components/Favlist'
import XHeader from 'coms/header'
import main from 'styles/bus/bus-base.less'
import Fetch from 'common/fetch'
import Store from 'common/store'
import BaseModel from 'models/basemodel'

new Vue({
	el: 'body',
	data: {
		title: "Title"
	},
	components: { Favlist, XHeader }
})

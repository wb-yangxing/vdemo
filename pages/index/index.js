import Vue from 'vue'
import Favlist from './components/Favlist'
import XHeader from 'coms/header'
import main from 'styles/bus/bus-base.less'

new Vue({
	el: 'body',
	data: {
		title: "Title"
	},
	components: { Favlist, XHeader }
})

import Vue from 'vue'
import Favlist from './components/Favlist'
import XHeader from './components/Header'

new Vue({
	el: 'body',
	data: {
		title: "Title"
	},
	components: { Favlist, XHeader }
})

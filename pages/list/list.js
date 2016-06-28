import Vue from 'vue'
import main from 'styles/bus/bus-base.less'
import XHeader from 'coms/header'
import recommend from './components/recommend'
import list from './components/list'

new Vue({
	el: 'body',
	components: { XHeader ,recommend, list}
})

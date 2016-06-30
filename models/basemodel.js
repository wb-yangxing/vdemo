function baseModel(){
	this.initialize.apply(this , arguments);
	this.__propertys__.apply(this , arguments);
};

baseModel.prototype.__propertys__ = function () {

};
baseModel.prototype.initialize = function(params){
	this.url = "";
	this.protocol = (window.location.protocol.indexOf("https") > -1) ? "https" : "http";
	this.domain = "";
	this.path = "";
	this.method = "POST";
	this.param = {};

	if(params && typeof(params.constructor == Object)){
    	for(var item in params){
    		this[item] = params[item];
    	}
    }
};
baseModel.prototype.execute = function(onComplete, onError, scope){
	var sendParam = {
		method: this.method,
		headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
			'Cache-Control':'no-cache'
		}
	}
	if(this.method == "POST"){
		sendParam.body = JSON.stringify(this.param);
	}
	fetch(this.buildurl(), sendParam).then(function(response){
		return response.json();
	}).then(function(json){
		if(json.code == 1){
			onComplete.call(scope, json);
		}else{
			onError.call(scope, json);
		}
	}).catch(function(err){

	})
};
baseModel.prototype.isUrl = function(url){
	return /^http(s)?:\/\/[A-Za-z0-9\-]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\:+!]*([^<>])*$/.test(url);
},
baseModel.prototype.buildurl=function () {
  var url = this.url;
  if (!this.isUrl(url)) {
    url = this.protocol + '://' + this.domain + '/' + this.path + '/' +  this.url;
  }
  return url;
};
baseModel.prototype.setParam = function (key, val) {
	if (typeof key === 'object' && !val) {
	  this.param = key;
	} else {
	  this.param[key] = val;
	}
  },
baseModel.prototype.clearParam = function(){
  	this.param = null;
}

module.exports = baseModel;
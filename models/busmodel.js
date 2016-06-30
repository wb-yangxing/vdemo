import config from 'config/baseconfig'

var clientInfo = "ref=ctrip.h5&partner=ctrip.h5&clientType=Android--h5&version=1000&_fxpcqlniredt=09031025310288221320&vendor=&contentType=json";

var M = {};
M.list = {
	domain: config.busDomain,
	path: config.busPath,
	url: "app/index.php?param=/api/home&method=product.getBusListPage&v=1.0&" + clientInfo,
	method: "POST",
	param: { }
}
module.exports = M;
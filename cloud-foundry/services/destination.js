var env = require("core/v4/env");
var httpClient = require("http/v4/client");
var urlEncoder = require("utils/v3/url");

exports.getDestination = function(name) {
	let config = getDestinationConfig();
	let url = config.credentials.uri + "/destination-configuration/v1/destinations/" + name;
	let accessToken = getDestinationServiceToken().access_token;
	let clientResponse = httpClient.get(url, {
		headers: [{
			name: "Authorization",
			value: "Bearer " + accessToken
		}]
	});
	return JSON.parse(clientResponse.text);
};

function getDestinationConfig() {
	let config = JSON.parse(env.get("VCAP_SERVICES"));
	return config.destination[0];
}

function getDestinationServiceToken() {
	let config = getDestinationConfig();
	let url = config.credentials.url + "/oauth/token";
	let clientId = config.credentials.clientid;
	let clientSecret = config.credentials.clientsecret;
	let clientResponse = httpClient.post(url, {
		params: [{
			name: "client_id",
			value: urlEncoder.encode(clientId)
		}, {
			name: "client_secret",
			value: urlEncoder.encode(clientSecret)
		}, {
			name: "grant_type",
			value: urlEncoder.encode("client_credentials")
		}]
	});
	return JSON.parse(clientResponse.text);
}
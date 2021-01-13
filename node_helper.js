const NodeHelper = require("node_helper");


module.exports = NodeHelper.create({
	start: function () {
	},

	socketNotificationReceived: function (notification, payload) {
		return false;
	}
});

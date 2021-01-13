Module.register("MMM-BurnIn", {

	defaults: {
		updateInterval: 15
	},

	getStyles: function () {
		return [];
	},

	start: function () {
		setTimeout(() => {
			this.startAntiBurnin();
		}, this.config.updateInterval * 60 * 1000);
	},

	getDom: function () {
		return document.createElement("div");
	},

	startAntiBurnin: function () {
		document.getElementsByTagName("body").item(0).style = "filter: invert(1)";
		this.updateDom(1000);
		setTimeout(() => {
			document.getElementsByTagName("body").item(0).style = "filter: invert(0)";
			this.updateDom(1000);
		}, 5000);
		setTimeout(() => {
			this.startAntiBurnin();
		}, this.config.updateInterval * 60 * 1000);
	},

	socketNotificationReceived: function (notification, payload) {
	}
});

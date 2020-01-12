Module.register("MMM-BurnIn", {

    defaults: {
        updateInterval: 15
    },

    getStyles: function () {
        return [];
    },

    start: function () {
        setInterval(() => {
            this.sendSocketNotification("DO_ANTI_BURNIN", this.config);
        }, this.config.updateInterval * 60 * 1000);
        setInterval(() => {
            this.sendSocketNotification("DO_ANTI_BURNIN2", this.config);
        }, (this.config.updateInterval * 60 * 1000) + 5000);
    },

    getDom: function () {
        return document.createElement("div");
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "ANTI_BURNIN") {
            document.getElementsByTagName("body").item(0).style = "filter: invert(1)";
            this.updateDom(1000);
        } else if (notification === "ANTI_BURNIN2") {
            document.getElementsByTagName("body").item(0).style = "filter: invert(0)";
            this.updateDom(1000);
        }
    }
});

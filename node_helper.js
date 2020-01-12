const NodeHelper = require("node_helper");


module.exports = NodeHelper.create({
    start: function () {
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "DO_ANTI_BURNIN") {
            this.sendSocketNotification("ANTI_BURNIN");
            return true;
        }else  if (notification === "DO_ANTI_BURNIN2") {
            this.sendSocketNotification("ANTI_BURNIN2");
            return true;
        }
    }
});

var Sanatorium = {

    widgetAPI:  new Common.API.Widget(),
    tvKey: new Common.API.TVKeyValue(),
    pluginAPI: new Common.API.Plugin(),

    init: function() {
        alert('Init: '+Platform);

        this.pluginAPI.unregistKey(this.tvKey.KEY_MENU);
        this.pluginAPI.unregistKey(this.tvKey.KEY_SOURCE);
        this.pluginAPI.unregistKey(147);
        this.widgetAPI.sendReadyEvent();
    },

    enableKeys: function()
    {
        document.getElementById("navigation").focus();
    },

    blockKeys:function() {
        this.widgetAPI.blockNavigation(event);
    },

    exit:function() {
        this.widgetAPI.sendExitEvent(event);
    },

    onNetworkError:function() {
        //TODO
    },

    afterNetworkError:function() {
        //TODO
    }
};



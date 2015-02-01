var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var pluginAPI = new Common.API.Plugin();

pluginAPI.unregistKey(tvKey.KEY_MENU);
pluginAPI.unregistKey(tvKey.KEY_SOURCE);
pluginAPI.unregistKey(147);

var Sanatorium = {

    init: function() {
        alert('Init: '+Platform);
        widgetAPI.sendReadyEvent();
    },

    enableKeys: function()
    {
        document.getElementById("navigation").focus();
    },

    blockKeys:function() {
        widgetAPI.blockNavigation(event);
    },

    exit:function() {
        widgetAPI.sendExitEvent(event);
    },

    onNetworkError:function() {
        //TODO
    },

    afterNetworkError:function() {
        //TODO
    }
};



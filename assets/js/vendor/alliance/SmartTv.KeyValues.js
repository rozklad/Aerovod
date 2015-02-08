Sanatorium.KeyValues = {};

(function() {
    function KeyValues() {
        var userAgent = navigator.userAgent;
        if (userAgent.search(/NetCast.TV/i) > -1)
        {
            var VK_ENTER    =  13;
            var VK_PAUSE    =  19;
            var VK_LEFT     =  37;
            var VK_UP       =  38;
            var VK_RIGHT    =  39;
            var VK_DOWN     =  40;
            var VK_0        =  48;
            var VK_1        =  49;
            var VK_2        =  50;
            var VK_3        =  51;
            var VK_4        =  52;
            var VK_5        =  53;
            var VK_6        =  54;
            var VK_7        =  55;
            var VK_8        =  56;
            var VK_9        =  57;
            var VK_RED      = 403;
            var VK_GREEN    = 404;
            var VK_YELLOW   = 405;
            var VK_BLUE     = 406;
            var VK_REWIND   = 412;
            var VK_STOP     = 413;
            var VK_PLAY     = 415;
            var VK_FAST_FWD = 417;
            var VK_BACK     = 461;
        }

        this.KEY_RETURN = this.KEY_PANEL_RETURN = VK_BACK || 8;
        this.KEY_UP = VK_UP || 38;
        this.KEY_DOWN = VK_DOWN || 40;
        this.KEY_LEFT = VK_LEFT || 37;
        this.KEY_RIGHT = VK_RIGHT || 39;
        this.KEY_ENTER = VK_ENTER || 13;
        this.KEY_RED = VK_RED || 403;
        this.KEY_GREEN = VK_GREEN || 404;
        this.KEY_YELLOW = VK_YELLOW || 405;
        this.KEY_BLUE = VK_BLUE || 406;
        this.KEY_0 = VK_0 || 48;
        this.KEY_1 = VK_1 || 49;
        this.KEY_2 = VK_2 || 50;
        this.KEY_3 = VK_3 || 51;
        this.KEY_4 = VK_4 || 52;
        this.KEY_5 = VK_5 || 53;
        this.KEY_6 = VK_6 || 54;
        this.KEY_7 = VK_7 || 55;
        this.KEY_8 = VK_8 || 56;
        this.KEY_9 = VK_9 || 57;
        this.KEY_PLAY = VK_PLAY || 415;
        this.KEY_STOP = VK_STOP || 413;
        this.KEY_PAUSE = VK_PAUSE || 19;
    }

    Sanatorium.KeyValues = KeyValues;
})();

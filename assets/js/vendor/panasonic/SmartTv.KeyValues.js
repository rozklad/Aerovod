Sanatorium.KeyValues = {};

(function() {
    function KeyValues() {
        this.KEY_RETURN = this.KEY_PANEL_RETURN = (typeof VK_BACK !== 'undefined') ? VK_BACK : 8;
        this.KEY_UP = (typeof VK_UP !== 'undefined') ? VK_UP : 38;
        this.KEY_DOWN = (typeof VK_DOWN !== 'undefined') ? VK_DOWN : 40;
        this.KEY_LEFT = (typeof VK_LEFT !== 'undefined') ? VK_LEFT : 37;
        this.KEY_RIGHT = (typeof VK_RIGHT !== 'undefined') ? VK_RIGHT : 39;
        this.KEY_ENTER = (typeof VK_ENTER !== 'undefined') ? VK_ENTER : 13;
        this.KEY_RED = (typeof VK_RED !== 'undefined') ? VK_RED : 403;
        this.KEY_GREEN = (typeof VK_GREEN !== 'undefined') ? VK_GREEN : 404;
        this.KEY_YELLOW = (typeof VK_YELLOW !== 'undefined') ? VK_YELLOW : 405;
        this.KEY_BLUE = (typeof VK_BLUE !== 'undefined') ? VK_BLUE : 406;
        this.KEY_0 = (typeof VK_0 !== 'undefined') ? VK_0 : 48;
        this.KEY_1 = (typeof VK_1 !== 'undefined') ? VK_1 : 49;
        this.KEY_2 = (typeof VK_2 !== 'undefined') ? VK_2 : 50;
        this.KEY_3 = (typeof VK_3 !== 'undefined') ? VK_3 : 51;
        this.KEY_4 = (typeof VK_4 !== 'undefined') ? VK_4 : 52;
        this.KEY_5 = (typeof VK_5 !== 'undefined') ? VK_5 : 53;
        this.KEY_6 = (typeof VK_6 !== 'undefined') ? VK_6 : 54;
        this.KEY_7 = (typeof VK_7 !== 'undefined') ? VK_7 : 55;
        this.KEY_8 = (typeof VK_8 !== 'undefined') ? VK_8 : 56;
        this.KEY_9 = (typeof VK_9 !== 'undefined') ? VK_9 : 57;
        this.KEY_PLAY = (typeof VK_PLAY !== 'undefined') ? VK_PLAY : 415;
        this.KEY_STOP = (typeof VK_STOP !== 'undefined') ? VK_STOP : 413;
        this.KEY_PAUSE = (typeof VK_PAUSE !== 'undefined') ? VK_PAUSE : 19;
    }

    Sanatorium.KeyValues = KeyValues;
})();

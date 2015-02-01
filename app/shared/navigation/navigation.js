app.navigation = {

    vm: null,
    $rootScope: null,

    /**
     * Sets viewmodel and $rootScope that shall
     * be used for navigation.
     * @param  {[type]} viewmodel  [description]
     * @param  {[type]} $rootScope [description]
     * @return {[type]}            [description]
     */

    init: function(viewmodel, $rootScope) {
          this.vm = viewmodel;
          this.$rootScope = $rootScope;
      },

    /**
     * Invoke actions upon keydown event.
     * @param  {[type]} $event [description]
     * @return {[type]}        [description]
     */
    keyDown: function($event) {

        var self = this;

        switch( $event.keyCode )
        {
            case tvKey.KEY_RETURN:
            case tvKey.KEY_PANEL_RETURN:
                // Return
                Sanatorium.blockKeys();
                self.back();
                break;

            case tvKey.KEY_LEFT:

                // Left arrow
                self.left();
                break;

            case tvKey.KEY_RIGHT:

                // Right arrow
                self.right();
                break;

            case tvKey.KEY_UP:

                // Up arrow
                self.up();
                break;

            case tvKey.KEY_DOWN:

                // Down arrow
                self.down();
                break;

            case tvKey.KEY_ENTER:
            case tvKey.KEY_PANEL_ENTER:

                // Enter
                self.enter();
                break;

            case tvKey.KEY_PLAY:
                // Play
                self.play();
                break;

            case tvKey.KEY_PAUSE:
                // Pause
                self.pause();
                break;

            case tvKey.KEY_STOP:
                // Pause
                self.stop();
                break;

            case tvKey.KEY_VOL_UP:
            case tvKey.KEY_PANEL_VOL_UP:
                // Volume up
                self.volumeUp();
                break;

            case tvKey.KEY_VOL_DOWN:
            case tvKey.KEY_PANEL_VOL_DOWN:
                // Volume down
                self.volumeDown();
                break;

            case tvKey.KEY_MUTE:
            case tvKey.KEY_PANEL_MUTE:
                // Mute
                self.mute();
                break;

           case tvKey.KEY_FF:
                // Fast forward
                self.fastforward();
                break;

            case tvKey.KEY_RW:
                // Rewind
                self.rewind();
                break;

            default:
                alert("Unhandled key, code: "+$event.keyCode);
                break;
        }
    },

    up: function() {
        this.$rootScope.$broadcast('up');
    },

    down: function() {
        this.$rootScope.$broadcast('down');
    },

    left: function() {
        this.$rootScope.$broadcast('left');
    },

    right: function() {
        this.$rootScope.$broadcast('right');
    },

    enter: function() {
        this.$rootScope.$broadcast('enter');
    },

    back: function() {
        this.$rootScope.$broadcast('back');
    },

    play: function() {
        this.$rootScope.$broadcast('play');
    },

    pause: function() {
        this.$rootScope.$broadcast('pause');
    },
    stop: function() {
        this.$rootScope.$broadcast('stop');
    },

    volumeUp: function() {
        this.$rootScope.$broadcast('volumeUp');
    },
    volumeDown: function() {
        this.$rootScope.$broadcast('volumeDown');
    },

    mute: function() {
        this.$rootScope.$broadcast('mute');
    },
    fastforward: function() {
        this.$rootScope.$broadcast('fastforward');
    },
    rewind: function() {
        this.$rootScope.$broadcast('rewind');
    },

};

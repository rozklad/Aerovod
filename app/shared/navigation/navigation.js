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

            case 71:
                // Play
                self.play();
            break;

            case 74:
                // Pause
                self.pause();
            break;

            case 101:

                self.number(1);
            break;

            case 98:

                self.number(2);
            break;

            case 6:

                self.number(3);
            break;

            case 8:

                self.number(4);
            break;

            case 9:

                self.number(5);
            break;

            case 10:

                self.number(6);
            break;

            case 12:

                self.number(7);
            break;

            case 13:

                self.number(8);
            break;

            case 14:

                self.number(9);
            break;

            case 17:

                self.number(0);
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

    number: function(number) {
        this.$rootScope.$broadcast('number', {number: number});
    }

};

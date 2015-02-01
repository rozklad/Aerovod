
Sanatorium.VideoPlayer = {

    REF: {
        READY: false,
        PLAYING: false,
        PAUSED: false,
        STOPPED: false,
        VOLUME: 0.5,
        MUTED: false,
        STEP: 30,
    },

    SRC: false,

    // Event/state manager
    init: function(video){

        alert('Player INIT fired');

        pluginAPI.setOffScreenSaver();

        var REF = this.REF;
        var SRC = this.SRC = video;

        this.SRC.addEventListener('loadstart', function() {
            alert('Load fired');
        });

        this.SRC.addEventListener('buffering', function() {
            alert('Buffering');
        });

        this.SRC.addEventListener('canplay', function() {
            alert('We can play');
            // @TODO Remember previous volume state from LocalStorage
            SRC.volume = REF.VOLUME;
            alert(SRC.volume);
            REF.READY = true;
        });

        this.SRC.addEventListener('playing', function() {
            alert('Waiting');
            REF.PLAYING = true;
            REF.PAUSED = false;
            REF.STOPPED = false;
        });

        this.SRC.addEventListener('paued', function() {
            alert('Waiting');
            REF.PLAYING = false;
            REF.PAUSED = true;
            REF.STOPPED = false;
        });

        this.SRC.addEventListener('ended', function() {
            alert('Ended');
            REF.PLAYING = false;
            REF.PAUSED = false;
            REF.STOPPED = true;
        });

        this.SRC.addEventListener('volumechange', function() {
            REF.VOLUME = SRC.volume;
        });

    },

    // Play video
    play: function() {
        this.SRC.play();
    },

    // Pause video playback
    pause: function() {
        this.SRC.pause();
    },

    // Pause video playback
    stop: function() {
        this.SRC.currentTime = 0;
        this.SRC.pause();
        REF.PLAYING = false;
        REF.PAUSED = false;
        REF.STOPPED = true;
    },

    setVolume: function(volume){
        this.SRC.volume = this.SRC.volume<=1 && this.SRC.volume>=0 ? this.SRC.volume + 0.1: this.SRC.volume;
    },

    mute: function(){
        this.SRC.muted = !this.SRC.muted;
        this.REF.MUTED = this.SRC.muted;
        alert(this.SRC.volume);
    },

    volumeUp: function(){
        this.SRC.volume = this.SRC.volume + 0.1 <=1 ? this.SRC.volume + 0.1: 1;
        alert(this.SRC.volume);
    },

    volumeDown: function(){
        this.SRC.volume = this.SRC.volume - 0.1  >=0 ? this.SRC.volume - 0.1: 0;
        alert(this.SRC.volume);
    },

    fastforward: function() {
        pos = this.SRC.currentTime + this.REF.STEP;
        if(pos<this.SRC.duration){
            this.SRC.currentTime = pos;
        }
    },

    rewind: function() {
        pos = this.SRC.currentTime - this.REF.STEP;
        if(pos>0){
            this.SRC.currentTime = pos;
        }
    },

    getCurrentTime: function() {
        return this.SRC.currentTime;
    },

    getTotalTime: function() {
        return this.SRC.duration;
    },

}

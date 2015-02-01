/* class SmartTv.VideoPlayer
*/
(function() {

	// Main
	function VideoPlayer(cont, cb) {
		this._cont = cont;
		this._cb = cb || {};
		this._video = document.createElement('video');
		this._video.style.height = "100%";
		this._video.style.width = "100%";
		this._windowedPos = {
			top: "0px",
			left: "0px"
		};

		this._mode = VideoPlayer.WINDOW;
		this._state = VideoPlayer.STOPPED;
		this._buffering = false;
		this._setEvents();
	}

	VideoPlayer.STOPPED = 0;
	VideoPlayer.PLAYING = 1;
	VideoPlayer.PAUSED = 2;

	VideoPlayer.WINDOW = 0;
	VideoPlayer.FULLSCREEN = 1;


	/* **************
	* PRIVATE
	************** */


	// Event/state manager
	VideoPlayer.prototype._setEvents = function() {
		var ref = this;
		var v = this._video;

		v.addEventListener('loadstart', function() {
			alert('loadstart fired');
			/*
			if(ref._buffering) return;
			ref._buffering = true;
			if(ref._cb.hasOwnProperty('onBufferingStart'))ref._cb.onBufferingStart.call(ref);
			*/
		});
		v.addEventListener('waiting', function() {
			alert('onwaiting fired');
			if(ref._buffering) return;
			ref._buffering = true;
			if(ref._cb.hasOwnProperty('onBufferingStart'))ref._cb.onBufferingStart.call(ref);
		});
		v.addEventListener('canplay', function() {
			//alert('canplay fired');
			if(!ref._buffering) return;
			ref._buffering = false;
			if(ref._cb.hasOwnProperty('onBufferingComplete'))ref._cb.onBufferingComplete.call(ref);
		});
		v.addEventListener('playing', function() {
			//alert('onplaying fired');
			if(!ref._buffering) return;
			ref._buffering = false;
			if(ref._cb.hasOwnProperty('onBufferingComplete'))ref._cb.onBufferingComplete.call(ref);
		});
		v.addEventListener('timeupdate', function() {
			//alert('ontimeupdate fired');
			if(ref._cb.hasOwnProperty('onTimeUpdate'))ref._cb.onTimeUpdate.call(ref, ref._video.currentTime, ref._video.duration);
		});
		v.addEventListener('ended', function() {
			ref._state = VideoPlayer.STOPPED;
			ref._poster.show();
			if(ref._cb.hasOwnProperty('onVideoComplete'))ref._cb.onVideoComplete.call(ref);
			ref._video.load();
		});
	};

	VideoPlayer.prototype._startVideo = function() {
		this._state = VideoPlayer.PLAYING;
		if(this._cb.hasOwnProperty('beforePlay')) this._cb.beforePlay.call(this);
		this._poster.hide();
		this._video.play();
		if(this._cb.hasOwnProperty('onStart')) this._cb.onStart.call(this);
	};

	VideoPlayer.prototype._resumeVideo = function() {
		this._state = VideoPlayer.PLAYING;
		this._video.play();
		if(this._cb.hasOwnProperty('onResume')) this._cb.onResume.call(this);
	};

	VideoPlayer.prototype._pauseVideo = function() {
		this._state = VideoPlayer.PAUSED;
		this._video.pause();
		if(this._cb.hasOwnProperty('onPause')) this._cb.onPause.call(this);
	};

	VideoPlayer.prototype._stopVideo = function() {
		this._state = VideoPlayer.STOPPED;
		this._video.pause();
		this._video.load();
		this._poster.show();
		if(this._cb.hasOwnProperty('onStop')) this._cb.onStop.call(this);
	};





	/* **************
	* PUBLIC ?
	************** */


	// Choose source vide file
	VideoPlayer.prototype.setVideo = function(file, type) {
		type = type || "video/mp4";
		$(this._video).find('source').each(function() {
			$(this).remove();
		});

		var source = document.createElement('source');

		source.src = file;
		source.type = type;

		this._video.appendChild(source);
	};

	// Set poster image
	VideoPlayer.prototype.setPoster = function(url) {
		this._poster.css('background-image', 'url("'+url+'")');
	};

	// Play video playback
	VideoPlayer.prototype.play = function() {
		switch(this._state) {
			case VideoPlayer.PAUSED:
				this._resumeVideo();
				break;
			case VideoPlayer.STOPPED:
				this._startVideo();
				break;
			default:
				break;
		}
	};

	// Pause video playback
	VideoPlayer.prototype.pause = function() {
		switch(this._state) {
			case VideoPlayer.PAUSED:
				this._resumeVideo();
				break;
			case VideoPlayer.PLAYING:
				this._pauseVideo();
				break;
			default:
				break;
		}
	};

	// Stop vide playback
	VideoPlayer.prototype.stop = function() {
		switch(this._state) {
			case VideoPlayer.PAUSED:
				this._stopVideo();
				break;
			case VideoPlayer.PLAYING:
				this._stopVideo();
				break;
			default:
				break;
		}
	};

	VideoPlayer.prototype.setWindow = function() {
		this._mode = VideoPlayer.WINDOW;
		this._cont.removeClass('fullscreen');
		if(this._cb.hasOwnProperty('onWindowMode')) this._cb.onWindowMode.call(this);
	};

	VideoPlayer.prototype.setFullscreen = function() {
		this._mode = VideoPlayer.FULLSCREEN;
		this._cont.addClass('fullscreen');
		if(this._cb.hasOwnProperty('onFullscreenMode')) this._cb.onFullscreenMode.call(this);
	};

	VideoPlayer.prototype.seek = function(time) {
		this._video.currenTime = time;
	};

	VideoPlayer.prototype.fastforward = function(step) {
		step = step || ~~(this._video.duration / 20);

		this._video.currenTime += step;
	};

	VideoPlayer.prototype.rewind = function(step) {
		step = step || ~~(this._video.duration / 20);

		this._video.currenTime -= step;
	};

	VideoPlayer.prototype.getCurrentTime = function() {
		return this._video.currentTime;
	};

	VideoPlayer.prototype.getTotalTime = function() {
		return this._video.duration;
	};

	VideoPlayer.prototype.getMode = function() {
		return this._mode;
	};

	VideoPlayer.prototype.getState = function() {
		return this._state;
	};

	Sanatorium.VideoPlayer = VideoPlayer;
})();
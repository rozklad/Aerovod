var SmartTvApp = {

	init: function(platform) {

		this.platform = platform;

		scripts = [
			'KeyValues.js'
			//'NetworkMonitor.js',
			//'VideoPLayer'
		];
/*
		for(var i = 0; i < scripts; i++) {
			var s = document.createElement('script');
			s.type = "text/javascript";
			s.src = 'assets/js/vendor/' + this.platform + '/' + scripts[i];
			s.onload = afterScriptLoad;
			alert('Script load: '+s.src);
			document.getElementsByTagName('head')[0].appendChild(s);
		}
*/

		this.api = this.loadApi();
		//this.netMon = new this.NetworkMonitor(this);
	},


	// Vendor specific
	loadApi: function(){
		switch(this.platform){

			case 'samsung':

				widgetAPI.sendReadyEvent();

				var widgetAPI = new Common.API.Widget();
				var tvKey = new Common.API.TVKeyValue();

			break; case 'alliance':

			break; case 'panasonic':



		}
	},

	// Vendor specific
	blockKeys:function() {
		widgetAPI.blockNavigation(event);
	}

}

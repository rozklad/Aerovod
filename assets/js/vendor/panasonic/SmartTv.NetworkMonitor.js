/* class NetworkMonitor
	to use set networkError:true in SmartTv init config
*/

(function() {
	function NetworkMonitor(ref) {
		var monitor = document.getElementById("pluginObjectNetwork");
		var cType = monitor.GetActiveType();
		var lastCheck = true;
		var appStateRestore = false;

		function checkConnection() {
			var connected = monitor.CheckPhysicalConnection(cType);
			var netConnected = monitor.CheckHTTP(cType);

			if(connected == 1 && netConnected == 1) {
				if(!lastCheck) {
					lastCheck = true;
					ref.onNetworkError();
				}
			} else {
				if(lastCheck) {
					lastCheck = false;
					ref.afterNetworkError();
				}
			}

			setTimeout(checkConnection, 3000);
		};

		setTimeout(checkConnection, 3000);
	};

	Sanatorium.NetworkMonitor = NetworkMonitor;
})();
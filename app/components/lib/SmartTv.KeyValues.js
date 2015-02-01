/* class SmartTv.KeyValues
	create global object to use it in whole application:
		var tvKeys = new SmartTv.KeyValues();

		then use tvKeys for key codes:
		eg: tvKeys.KEY_UP
*/
(function() {
	SmartTv.KeyValues = Common.API.TVKeyValue;
})();
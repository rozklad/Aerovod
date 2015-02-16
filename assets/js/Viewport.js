var Viewport = {
	'width': document.width,
	'height': document.height,
	'cssVendor': 'device-'+this.width+'-'+this.height,
};


alert('View: ' + Viewport.cssVendor);



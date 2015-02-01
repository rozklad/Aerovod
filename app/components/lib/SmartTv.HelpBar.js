/* class SmartTv.HelpBar
	appends div with ID "bar" into body element

	usage:
		create bar:
			var bar = SmartTv.getBar();

		set items to bar:
			bar.set(items); // items => Array() of items | item => {icon,label} eg. {"play","Přehrát"}

		insert item into bar:
			bar.insert(item, position, render); // item => as above | position (optional) => position in bar eg. 0, default -> add at the end | render (optional) => render bar, default -> true

		update item at position:
			bar.update(item, position); // item => as above | position => position in bar eg. 0

		remove item by icon:
			bar.remove(icon); // icon => icon name eg. "play"

		save actual items:
			bar.saveItems();

		restore saved items:
			bar.restoreItems();
*/
(function() {
	function HelpBar() {
		this._icons = {
			"play":'<img src="images/icons/icon-play.png" />',
			"pause":'<img src="images/icons/icon-pause.png" />',
			"info":'<img src="images/icons/icon-info.png" />',
			"left_right":'<img src="images/icons/icon-leftright.png" />',
			"up_down":'<img src="images/icons/icon-updown.png" />',
			"enter":'<img src="images/icons/icon-enter.png" />',
			"tools":'<img src="images/icons/icon-tools.png" />',
			"red":'<img src="images/icons/icon-red.png" />',
			"green":'<img src="images/icons/icon-green.png" />',
			"rew_ff":'<img src="images/icons/icon-rew-ff.png" />',
			"stop":'<img src="images/icons/icon-stop.png" />',
			"back":'<img src="images/icons/icon-back.png" />'
		};

		this._actual = [];
		this._oldItems = [];

		this._cont = document.createElement('div');
		this._cont.id = "bar";

		document.body.appendChild(this._cont);
	}

	HelpBar.prototype.insert = function(item, position, render) {
		position = position || this._actual.length;
		render = (typeof render == "undefined") ? true : render;
		if(position > this._actual.length) position = this._actual.length;

		this.remove(item.icon);

		this._actual.splice(position,0,item);

		if(render) this._render();
	};

	HelpBar.prototype.update = function(item, position) {
		if(position > this._actual.length-1) return;

		this._actual[position] = item;

		this._render();
	};

	HelpBar.prototype.set = function(items) {
		this._actual.length = 0;
		for (var i = 0; i < items.length; i++) {
			this.insert(items[i], false, false);
		};

		this._render();
	};

	HelpBar.prototype.saveItems = function() {
		this._oldItems.length = 0;

		for (var i = 0; i < this._actual.length; i++) {
			this._oldItems.push($.extend(true,{},this._actual[i]));
		};
	};

	HelpBar.prototype.restoreItems = function() {
		this._actual.length = 0;

		for (var i = 0; i < this._oldItems.length; i++) {
			this._actual.push(this._oldItems[i]);
		};

		this._render();
	};

	HelpBar.prototype.remove = function(icon) {
		for (var i = 0; i < this._actual.length; i++) {
			if(this._actual[i].icon == icon) {
				this._actual.splice(i,1);
				break;
			}
		};

		this._render();
	};

	HelpBar.prototype._render = function() {
		var html = '';

		for(var i = 0; i < this._actual.length; i++) {
			html += "<div>" + this._icons[this._actual[i].icon] + " " + this._actual[i].label + "</div>";
		}

		$(this._cont).html(html);
	};

	HelpBar.prototype.hide = function(type, time) {
		type = type || 'hide';
		time = time || 400;

		switch(type) {
			case 'hide':
				$(this._cont).hide();
				break;
			case 'fadeOut':
				$(this._cont).fadeOut(time);
				break;
			default:
				break;
		}
	};

	HelpBar.prototype.show = function(type, time) {
		type = type || 'show';
		time = time || 400;

		switch(type) {
			case 'show':
				$(this._cont).show();
				break;
			case 'fadeIn':
				$(this._cont).fadeIn(time);
				break;
			default:
				break;
		}
	};

	SmartTv.HelpBar = HelpBar;
})();
var decoder = {
	decode_main: function(inputString) {
		var zlibHeader = "7a990d405d2c6fb93aa8fbb0ec1a3b23";
		var deflateHeader = "7e8bb5a89f2842ac4af01b3b7e228592";
		var output = '';
		if (inputString.substring(0, 32) == zlibHeader) {
			$('#saveGameType').val('zlib');
			output = decoder.decode_zlib(inputString);
		}
		else if (inputString.substring(0, 32) == deflateHeader) {
			$('#saveGameType').val('deflate');
			output = decoder.decode_deflate(inputString);
		}
		else {
			$('#saveGameType').val('base64');
			output = decoder.decode_base64(inputString);
		}
		return output;
	},

	decode_base64: function(inputString) {
		var output = '';
		if (inputString.indexOf(ANTI_CHEAT_CODE) > 0) {
	        inputString = inputString.split(ANTI_CHEAT_CODE)[0];
	        var _loc1 = inputString.split('');
	        var _loc2 = _loc1.filter(function(val, index) {
	        	return (index % 2 === 0);
	        });
	       	var _loc3 = _loc2.join('');
	        var output = JSON.parse(atob(_loc3));
	    }
	    else {
	    	var output = JSON.parse(inputString);
	    }
	    return output;
	},

	decode_zlib: function(inputString) {
		var pako = window.pako;
		var _loc1 = inputString.substring(32);
		var _loc2 = atob(_loc1);
		var output = JSON.parse(pako.inflate(_loc2, {to: 'string'}));
		return output;
	},

	decode_deflate: function(inputString) {
		var pako = window.pako;
		var _loc1 = inputString.substring(32);
		var _loc2 = atob(_loc1);
		var output = JSON.parse(pako.inflateRaw(_loc2, {to: 'string'}));
		return output;
	}
};
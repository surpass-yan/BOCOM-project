(function () {
	function getXhr() {
		let xhr = null;
		let arrFn = [
			function () {
				return new XMLHttpRequest();
			},
			function () {
				return new ActiveXObject('Msxml3.XMLHTTP');
			},
			function () {
				return new ActiveXObject('Msxml2.XMLHTTP');
			},
			function () {
				return new ActiveXObject('Microsoft.XMLHTTP');
			}
		];
		for (let i = 0; i < arrFn.length; i++) {
			try {
				xhr = arrFn[i]();
				getXhr = arrFn[i];
				break;
			} catch (e) {

			}
		}

		if (!xhr) {
			alert('请升级浏览器！');
		}
		return xhr;
	}

	function ajax(options) {
		let _default = {
			url: null,
			type: 'GET',
			dataType: 'text',
			data: null,
			cache: true,
			async: true,
			timeout: null,
			error: null,
			success: null
		};
		for (let attr in options) {
			if (options.hasOwnProperty(attr)) {
				_default[attr] = options[attr];
			}
		}

		//get
		if (_default.type.toUpperCase() === 'GET') {
			if (_default.cache === false) {
				if (_default.url.includes('?')) {
					_default.url += new Date().getTime();
				} else {
					_default.url += '?' + new Date().getTime();
				}
			}

			if (_default.data) {
				for (let attr in _default.data) {
					if (_default.data.hasOwnProperty(attr)) {
						if (_default.url.includes('?')) {
							_default.url += '&' + attr + '=' + _default.data[attr];
						} else {
							_default.url += '?' + attr + '=' + _default.data[attr];
						}
					}
				}
			}
		}

		let xhr = getXhr();
		xhr.responseType = _default.dataType;
		xhr.open(_default.type, _default.url, _default.async);
		xhr.onreadystatechange = function () {
			if (this.readyState === 4 && /^2\d{2}$/.test(this.status)) {
				typeof _default.success === 'function' ?
					_default.success(this.response) : null;
			}
		};
		xhr.send(JSON.stringify(_default.data));
		xhr.timeout = _default.timeout;
		xhr.ontimeout = _default.error;
	}
	window.ajax = ajax;
})();
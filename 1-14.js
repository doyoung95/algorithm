function solution(s) {
	function result(i) {
		return s.toLowerCase().indexOf(i);
	}
	if (result('p') + result('y') == -2) {
		console.log('p+y == -2');
		return true;
	} else {
		if (result('p') == -1) {
			console.log('p == -1');
			return false;
		} else if (result('y') == -1) {
			console.log('y == -1');
			return false;
		} else {
			var resultP = s.match(/p/gi);
			var resultY = s.match(/y/gi);
			if (resultP.length == resultY.length) {
				console.log('p ==y');
				return true;
			}
			console.log('p ==y');
			return false;
		}
	}
}

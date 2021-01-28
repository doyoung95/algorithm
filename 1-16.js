function solution(s) {
	function test1(s) {
		if (s.length == 4 || s.length == 6) {
			return true;
		}
		return false;
	}
	function test2(s) {
		for (var i = 0; i < s.length; i++) {
			if (isNaN(s[i])) {
				return false;
			}
		}
		return true;
	}
	if (test1(s)) {
		if (test2(s)) {
			return true;
		}
		return false;
	}
	return false;
}

function solution(n) {
	var result = [];
	function three(n) {
		var ten, one;
		one = n % 3;
		result.unshift(n % 3);
		ten = Math.floor(n / 3);
		if (ten > 3) {
			three(ten);
		} else {
			result.unshift(ten);
		}
	}
	three(n);

	function trans() {
		if (result[0] == 0) {
			result.shift();
		}
		for (var i = result.length - 1; i > 0; i--) {
			if (result[i] == 0) {
				result[i] = 3;
				result[i - 1] -= 1;
				trans();
			} else if (result[i] == -1) {
				result[i] = 2;
				result[i - 1] -= 1;
				trans();
			}
		}
	}
	trans();
	var answer = String(result.join('')).replace(/3/g, 4);
	return answer;
}
solution(18);

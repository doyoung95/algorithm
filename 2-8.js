function solution(s) {
	var answer = s.length;
	var arr = [];
	//우선 작은 것부터 나누는 방법 시도
	for (var i = 1; i <= Math.floor(s.length / 2); i++) {
		arr = [];
		for (var j = 0; j < s.length; j += i) {
			var overlap = false;
			var count = 1;
			var result = s.substring(j, j + i);
			arr.push(result);
		}
		for (var x = 0; x < arr.length; x++) {
			if (arr[x] == arr[x + 1]) {
				arr.splice(x, 1);
				count++;
				x--;
				overlap = true;
			} else {
				if (overlap) {
					arr.splice(x, 0, count);
					overlap = false;
					count = 1;
					x++;
				}
			}
		}
		var result = arr.join('');
		if (answer > result.length) {
			answer = result.length;
		}
	}
	return answer;
}
solution('abcabcabcabcdededededede');

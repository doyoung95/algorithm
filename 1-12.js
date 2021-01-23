function solution(a, b) {
	var answer = 0;
	var maxN,
		minN = null;
	if (a > b) {
		maxN = a;
		minN = b;
	} else if (a < b) {
		maxN = b;
		minN = a;
	} else {
		return a;
	}

	for (var i = minN; i <= maxN; i++) {
		answer += i;
	}

	return answer;
}

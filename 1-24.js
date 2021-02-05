function solution(n) {
	var list = [];
	for (var i = 1; i <= n; i++) {
		if (n % i == 0) {
			list.push(i);
		}
	}
	var answer = list.reduce((acc, cur) => (acc += cur), 0);
	return answer;
}

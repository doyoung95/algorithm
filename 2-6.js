function solution(priorities, location) {
	priorities.splice(location, 0, 'here');
	var answer = 0;
	while (true) {
		if (priorities[0] == 'here') {
			priorities.shift();
			priorities.push('here');
			var high = priorities.slice();
			high.sort().sort((a, b) => b - a);
			if (priorities[0] >= high[0]) {
				answer++;
				return answer;
			}
		}
		var high = priorities.slice();
		high.sort().sort((a, b) => b - a);
		if (priorities[0] >= high[0]) {
			priorities.shift();
			answer++;
		} else {
			var num = priorities[0];
			priorities.shift();
			priorities.push(num);
		}
	}
}
solution([2, 1, 3, 2], 2);

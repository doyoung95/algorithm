function solution(new_id) {
	var regExp = /[~!@\#$%^&*()\=+\[\{\]\}:?,<>\/]/g;
	if (regExp.test(new_id)) {
		var answer = new_id.toLowerCase().replace(regExp, '').split('');
	} else {
		var answer = new_id.toLowerCase().split('');
	}
	for (var i = 0; i < answer.length; i++) {
		if (answer[i] == '.') {
			if (answer[i] == answer[i + 1]) {
				answer.splice(i, 1);
				i--;
			}
		}
	}
	if (answer[0] == '.') answer.splice(0, 1);
	if (answer.length > 15) answer.splice(15);
	if (answer[answer.length - 1] == '.') answer.splice(answer.length - 1, 1);
	if (answer == 0) return 'aaa';
	while (answer.length < 3) {
		answer.push(answer[answer.length - 1]);
	}
	return answer.join('');
}

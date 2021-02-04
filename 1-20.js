//반복문을 이용한 풀이
function solution(n) {
	var answer = '';
	for (var i = 1; i <= n; i++) {
		if (i % 2 == 1) {
			answer += '수';
		} else {
			answer += '박';
		}
	}
	return answer;
}
//내장함수 repeat()을 이용한 풀이
function solution(n) {
	var answer = '수박'.repeat(n / 2) + (n % 2 == 1 ? '수' : '');
	return answer;
}

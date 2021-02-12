function solution(n) {
	var array = String(n).split('');
	var answer = array.sort((a, b) => b - a).join('');

	return Number(answer);
}

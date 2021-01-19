//직접 3진법으로 갔다가 10진법으로 오는 코드
function solution(n) {
	var answer = 0;
	var an3 = [];
	n3();
	//3진법으로 만드는 함수
	function n3() {
		for (var i = 0; i >= 0; i++) {
			if (n >= 3) {
				an3.unshift(n % 3);
				n = Math.floor(n / 3);
			} else if (n < 3) {
				an3.unshift(n);
				n10();
				return false;
			}
		}
	}
	//10진법으로 만드는 함수
	function n10() {
		for (var i = 0; i < an3.length; i++) {
			answer += an3[i] * Math.pow(3, i);
		}
	}
	return answer;
}

//내장함수를 이용해 진법을 바꾸는 경우
function solution(n) {
	var answer1 = n.toString(3).split('').reverse().join('');
	var answer = Number.parseInt(answer1, 3);

	return answer;
}

function solution(n) {
	//n을 문자형으로 바꾼 뒤 한글자씩 잘라 배열에 넣고 뒤집는다.
	var answer = String(n).split('').reverse();
	//for문을 통해 각 요소들을 숫자형으로 바꿔준다.
	for (var i = 0; i < answer.length; i++) {
		answer[i] = Number(answer[i]);
	}
	return answer;
}

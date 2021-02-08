function solution(s) {
	//s의 각 문자를 배열로 가져온다.
	var answer = s.split('');
	//짝수인지 확인하기 위한 변수 even
	var even = true;

	for (var i = 0; i < answer.length; i++) {
		//i번째 요소가 공백이 아닐 때
		if (answer[i] !== ' ') {
			//짝수이면 대문자 변환 후 even을 false로 변환
			if (even) {
				answer[i] = answer[i].toUpperCase();
				even = false;
				//홀수이면 소문자 변환 후 even을 true로 변환
			} else {
				answer[i] = answer[i].toLowerCase();
				even = true;
			}
		} else {
			//i번째 요소가 공백이면 even을 true로 바꿔줌
			even = true;
		}
	}
	//split한 문자열을 다시 묶어준다.
	return answer.join('');
}

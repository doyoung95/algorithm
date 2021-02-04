function solution(s, n) {
	//s를 배열로 만든다.
	let arrS = s.split('');
	//소문자열/대문자열을 만들어준다.
	let strabc = 'abcdefghijklmnopqrstuvwxyz';
	let strABC = strabc.toUpperCase();
	//반복문을 통해 s의 각 문자들을 순서대로 불러온다.
	for (var i = 0; i < arrS.length; i++) {
		//소문자인 경우
		if (strabc.indexOf(arrS[i]) !== -1) {
			//s의 값과 같은 소문자열의 인덱스 번호에 n을 더한 후 26의 나머지 값에 해당하는
			//값을 s로 바꿔준다.
			arrS[i] = strabc[(strabc.indexOf(arrS[i]) + n) % 26];
			//대문자인 경우
		} else if (strABC.indexOf(arrS[i]) !== -1) {
			//소문자일 경우의 코드와 동일하게 대문자열에서 바꿔준다.
			arrS[i] = strABC[(strABC.indexOf(arrS[i]) + n) % 26];
		}
		//공백일 경우 s의 다음 인덱스 탐색
	}

	return arrS.join('');
}

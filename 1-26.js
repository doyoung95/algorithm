function solution(n) {
	//주어진 n을 string으로 바꿔 배열에 각 요소를 넣어준다.
	var eachN = String(n).split('');

	var answer = 0;

	//for문을 통해 각 요소들을 answer에 number형으로 더해준다.
	for (var i = 0; i < eachN.length; i++) {
		answer += Number(eachN[i]);
	}
	return answer;
}
solution(123);

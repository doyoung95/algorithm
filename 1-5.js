function solution(n, lost, reserve) {
	//여벌을 가져온 학생이 도둑맞은 경우 제거
	for (var i = 0; i < reserve.length; i++) {
		if (lost.includes(reserve[i])) {
			lost.splice(lost.indexOf(reserve[i]), 1);
			reserve.splice(i, 1);
			i--;
		}
	}
	//여벌을 빌려줌(작은 번호부터)
	for (var i = 0; i < reserve.length; i++) {
		for (var j = -1; j < 2; j += 2) {
			if (lost.includes(reserve[i] + j)) {
				lost.splice(lost.indexOf(reserve[i] + j), 1);
				break;
			}
		}
	}
	var answer = n - lost.length;
	return answer;
}
solution(5, [1, 2, 3, 4], [3, 4]);

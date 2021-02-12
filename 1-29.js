function solution(n) {
	//n이 1일 경우 아래 반복문으로 판별할 수 없기 때문에 바로 값을 리턴한다.
	if (n == 1) {
		return 4;
	}
	//반복문을 통해 i의 제곱이 n이 되는지 판별
	//n/2보다 더 효율적으로 범위를 정할 수 있을텐데....
	for (var i = 1; i < Math.floor(n / 2); i++) {
		if (i * i == n) {
			return (i + 1) * (i + 1);
		} else if (i * i > n) {
			return -1;
		} else {
			continue;
		}
	}
	return -1;
}

function solution(n) {
	const list = [];
	for (var i = 0; i <= n; i++) {
		list.push(true);
	}
	for (var i = 2; i * i <= n; i += 1) {
		if (list[i]) {
			for (var j = i * i; j <= n; j += i) {
				list[j] = false;
			}
		}
	}

	return list.filter((n) => n == true).length - 2;
}

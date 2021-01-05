function solution(numbers) {
	var numbersArr = numbers;
	var a = 0;
	var result = new Array();
	for (var i = 0; i < numbersArr.length - 1; i++) {
		for (var j = i + 1; j < numbersArr.length; j++) {
			result.push(numbersArr[i] + numbersArr[j]);
			a++;
		}
	}

	var answer = [...new Set(result)];
	answer.sort(function (a, b) {
		return a - b;
	});

	return answer;
}

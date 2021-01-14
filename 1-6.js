function solution(array, commands) {
	var answer = [];
	for (var i = 0; i < commands.length; i++) {
		var arrSlice = array.slice(commands[i][0] - 1, commands[i][1]);
		arrSlice.sort((a, b) => a - b);
		answer.push(arrSlice[commands[i][2] - 1]);
		// console.log(i, 'aS', arrSlice);
		// console.log(i, 'answer', answer);
	}

	return answer;
}

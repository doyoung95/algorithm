function solution(progresses, speeds) {
	var answer = [];
	var clear = 0;

	while (progresses.length !== 0) {
		for (var i = 0; i < progresses.length; i++) {
			progresses[i] += speeds[i];
		}
		if (progresses[0] >= 100) {
			while (progresses[0] >= 100) {
				progresses.shift();
				speeds.shift();
				clear++;
			}
			answer.push(clear);
			clear = 0;
		}
	}

	return answer;
}
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);

function solution(participant, completion) {
	let answer = 0;
	participant.sort();
	completion.sort();
	for (var i = 0; i < participant.length; i++) {
		if (participant[i] !== completion[i]) {
			answer = participant[i];
			break;
		}
	}

	return answer;
}

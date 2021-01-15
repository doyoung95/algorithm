function solution(a, b) {
	const month = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 205, 335];
	const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

	var answer = day[(month[a - 1] + b) % 7];

	return answer;
}

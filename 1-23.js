// function solution(a, b) {
// 	var answer = a.reduce(function (acc, cur, idx) {
// 		return (acc += cur * b[idx]);
// 	}, 0);
// 	return answer;
// }
solution([1, 2, 3, 4], [-3, -1, 0, 2]);

function solution(a, b) {
	var answer = a.reduce((acc, cur, i) => (acc += cur * b[i]), 0);

	return answer;
}

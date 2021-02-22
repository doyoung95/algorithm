function solution(skill, skill_trees) {
	var answer = skill_trees;
	for (var i = 0; i < answer.length; i++) {
		for (var j = 0; j < skill.length - 1; j++) {
			var first = answer[i].indexOf(skill[j]);
			var second = answer[i].indexOf(skill[j + 1]);
			if (first !== -1 && second == -1) {
				second = first;
			}
			if (first == -1 && second !== -1) {
				first = second + 1;
			}
			if (first > second) {
				console.log(first, second, answer);
				answer.splice(i, 1);
				i--;
				break;
			}
		}
	}
	console.log(answer);
}
solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']);

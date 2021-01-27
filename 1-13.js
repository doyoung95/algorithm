function solution(strings, n) {
	var strClone = [[]];
	for (var i = 0; i < strings.length; i++) {
		strClone[i] = strings[i].split('');
		var SIdx = strClone[i].splice(n, 1);
		strClone[i].unshift(SIdx[0]);
	}
	strClone.sort();
	var answer = [];
	for (var i = 0; i < strings.length; i++) {
		var SIdx = strClone[i].splice(0, 1);
		strClone[i].splice(n, 0, SIdx[0]);
		answer[i] = strClone[i].join('');
	}
	return answer;
}

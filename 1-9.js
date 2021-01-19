function solution(s) {
	var ansStr = s.split('');
	var aL = ansStr.length;
	if (aL % 2 == 1) {
		return ansStr[Math.floor(aL / 2)];
	} else if (aL % 2 == 0) {
		return ansStr[Math.floor(aL / 2) - 1] + ansStr[Math.floor(aL / 2)];
	}
}
solution('qwer');

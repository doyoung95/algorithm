function solution(answers) {
	//i%5 값
	var point1 = 0;
	//i가 홀수이면 2
	// 짝수이면 8로 나누어 2,4,6,0 -> 1,3,4,5
	var point2 = 0;
	//i%10의 나머지가 1||2, 3||4, 5||6, 7||8, 9||10 -> 3,1,2,4,5
	var point3 = 0;

	for (var i = 0; i < answers.length; i++) {
		let aV = answers[i];
		let aL = i + 1;

		//point1 확인
		if (aV % 5 == aL % 5) {
			point1++;
		}
		//point2 확인
		if (aV == 2 && aL % 2 == 1) {
			point2++;
		} else if (aL % 8 == 2 && aV == 1) {
			point2++;
		} else if (aL % 8 == 4 && aV == 3) {
			point2++;
		} else if (aL % 8 == 6 && aV == 4) {
			point2++;
		} else if (aL % 8 == 0 && aV == 5) {
			point2++;
		}
		//point3 확인
		if ((aV == 1 && aL % 10 == 3) || (aV == 1 && aL % 10 == 4)) {
			point3++;
		} else if ((aV == 2 && aL % 10 == 5) || (aV == 2 && aL % 10 == 6)) {
			point3++;
		} else if ((aV == 3 && aL % 10 == 1) || (aV == 3 && aL % 10 == 2)) {
			point3++;
		} else if ((aV == 4 && aL % 10 == 7) || (aV == 4 && aL % 10 == 8)) {
			point3++;
		} else if (aV == 5 && (0 == aL % 10 || 9 == aL % 10)) {
			point3++;
		}
	}
	if (point1 > point2) {
		if (point1 > point3) {
			return 1; //32<1이 제일 클 때
		} else if (point1 < point3) {
			return 3; // 2<1<3이 제일 클 때
		}
		return 1, 3;
	} else if (point1 < point2) {
		if (point2 > point3) {
			return 2; //1<3<2가 제일 클 때
		} else if (point2 < point3) {
			return 3; //1<2<3이 제일 클 때
		}
		return 2, 3; //23이 같고 1보다 클 때
	} else if (point1 < point3) {
		return 3; //12가 같고 3이 제일 클 때
	} else if (point1 > point3) {
		return 1, 2; //12가 같고 3보다 클 때
	} else return 1, 2, 3;
}

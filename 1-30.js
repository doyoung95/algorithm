function solution(arr) {
	// arr에 요소가 한개밖에 없을 경우 -1을 리턴
	if (arr.length == 1) {
		return [-1];
	}
	//가장 작은 요소를 찾기위해 arr를 내림차순 정렬
	var result = [...arr];
	result.sort((a, b) => a - b);
	var del = arr.indexOf(result[0]);
	// 내림차순한 녀석의 첫번째 인덱스 값을 arr에서 삭제
	arr.splice(del, 1);

	return arr;
}

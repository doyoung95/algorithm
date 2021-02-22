//처음 풀었을 때 => 3000ms
// 매번 while문 속에 for 문을 돌려 bridge의 총 무게를 구함
function solution(bridge_length, weight, truck_weights) {
	var sec = 0;
	var bridge = [];
	for (var i = 0; i < bridge_length; i++) {
		bridge.push(0);
	}
	while (truck_weights.length !== 0) {
		sec++;
		var total = 0;
		bridge.splice(0, 1);
		for (var i = 0; i < bridge.length; i++) {
			total += bridge[i];
		}
		if (total + truck_weights[0] <= weight) {
			bridge.push(truck_weights[0]);
			truck_weights.splice(0, 1);
		} else {
			bridge.push(0);
		}
	}
	return sec + bridge_length;
}

// 두번째 => 1600ms
// while문 속 for문을 빼고 bridge의 처음 값은 0이니까 while문을 돌면서 트럭이 들어가면 + 나가면 -해줌
function solution(bridge_length, weight, truck_weights) {
	var sec = 0;
	var bridge = [];
	var total = 0;
	for (var i = 0; i < bridge_length; i++) {
		bridge.push(0);
	}
	while (truck_weights.length !== 0) {
		sec++;
		total -= bridge[0];
		bridge.splice(0, 1);
		if (total + truck_weights[0] <= weight) {
			total += truck_weights[0];
			bridge.push(truck_weights[0]);
			truck_weights.splice(0, 1);
		} else {
			bridge.push(0);
		}
	}
	return sec + bridge_length;
}

//세번째 => 28ms
//기존 shift함수를 unshift로 바꿔줌
function solution(bridge_length, weight, truck_weights) {
	var sec = 0;
	var bridge = [];
	var total = 0;
	for (var i = 0; i < bridge_length; i++) {
		bridge.push(0);
	}
	while (truck_weights.length !== 0) {
		sec++;
		total -= bridge[0];
		bridge.shift();
		if (total + truck_weights[0] <= weight) {
			total += truck_weights[0];
			bridge.push(truck_weights[0]);
			truck_weights.shift();
		} else {
			bridge.push(0);
		}
	}
	return sec + bridge_length;
}

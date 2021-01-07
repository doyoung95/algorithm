function solution(board, moves) {
	var storage = new Array();
	var storageNum = 0;
	for (var i = 0; i < moves.length; i++) {
		for (var j = 0; j < board.length; j++) {
			if (board[j][moves[i] - 1] !== 0) {
				storage[storageNum] = board[j][moves[i] - 1];
				board[j].splice(moves[i] - 1, 1, 0);
				storageNum++;
				break;
			}
		}
	}

	var same = 0;
	function del() {
		for (var i = 0; i < storage.length; i++) {
			if (storage[i] == storage[i + 1]) {
				storage.splice(i, 2);
				same++;
				del();
			}
		}
	}

	del();
	var answer = same * 2;
	return answer;
}

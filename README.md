﻿# algorithm

**도영이의 문제 풀이 저장소**<br/>

---

_2021 01 05_<br/>
**1-2 두개 뽑아 더하기**<br/>
10시간이나 걸려 푼 첫 문제<br/>
정말 밤새 고뇌하고 꿈에서도 나왔다.<br/>
열심히 풀어서 답지에 옮기고 돌려보니 계속 에러만 떴다.<br/>
알고보니 문제에서 시키지도 않은 것들을 혼자 끙끙거리며 만들고 있던것..<br/>
문제에서 제시한 필요한 내용만 차근 차근 풀어나가니 의외로 쉽게 풀렸다.<br/>
10시간 동안 배열에 관한 글이란 글은 싹다 읽어가며 풀었기에..<br/>
많이 발전하지 않았을까 싶다..😂<br/><br/><br/>

_2021 01 06_<br/>
**1-1 크레인 인형뽑기 게임**<br/>
처음 1-1문제를 접했을 땐 완전 멘붕이었다.<br/>
도저히 감도 오지 않고 해답이 보이지 않아서 1-2를 먼저 푼것...<br/>
1-2를 풀면서 1-1문제에 대해서도 계속 생각해봤던 것 같다.<br/>
1-2와 마찬가지로 너무 접근을 어렵게 했던 것도 있고,<br/>
배열에 대해 어느정도 지식이 쌓여서 그런지 차근차근 코드를 써볼 수 있었다.<br/>
moves의 값을 바로 board의 인덱스 번호로 삽입했을 때 자꾸 board의 길이가 길어지고,<br/>
원하지 않는 값을 storage에 저장해서 머리가 아팠는데<br/>
원인은 인덱스의 번호는 0부터 시작하지만 moves의 값은 그걸 고려하지 않는다는 것이었다.<br/>
샤워 도중 번뜩 유레카를 외치고 수정 후 콘솔을 찍어보니 드디어 원하는 값이 나왔다ㅠㅠ<br/>
첫날 밤새 고민했던 시간까지 합치면 1-2를 풀때보다 시간이 많이 걸렸지만<br/>
1-2 이후에 1-1에 쓴 시간만 생각해보면 4~5시간이 걸렸던 것 같다.<br/>
그래도 문제에 매달린 시간이 반이나 줄어서 너무 행복하다🤩🤩<br/><br/><br/>

_2021 01 07_<br/>
**1-3 완주하지 못한 선수**<br/>
1-3문제를 읽어보자 마자 심장이 두근두근 요동쳤다.<br/>
문제를 보자마자 기막힌 풀이가 떠오른 것...<br/>
참가자의 배열과 완주자의 배열 사이에 다른 값은 완주하지 못한 사람밖에 없으니<br/>
두 배열을 똑같이 정렬시켜 놓고 다른 배열의 값을 리턴해야겠구나!!<br/>
5분도 걸리지 않아 코드를 짰고 실행시켜 보았다..<br/>
결과는.....두구두구두구 통과!!!@!@!@!!@!<br/>
너무 흥분됐다. 나 혹시 재능충인가..<br/><br/><br/>

_2021 01 13_<br/>
**1-4 모의고사**<br/>
진짜 오래 고민했는데 도저히 해답이 나오지 않았다<br/>
정말 좌절했다... 거의 노가다로 모든 경우의 수를 적은것같다..<br/>
그래도 코드는 맞게 짰는지 통과는 했지만 정말 부끄러운 통과였다.<br/>
하... 이 문제 꼭 다시 풀어보겠어..<br/><br/><br/>

_2021 01 13_<br/>
**체육복**<br/>
와 진짜 이것도 애쓴 문제였다.<br/>
코드를 이렇게 짜도 저렇게 짜도 실패하는 경우가 생기는 것..<br/>
결국 실패하는 코드의 이유는 문제의 함정을 놓친 탓<br/>
여벌의 체육복을 가져온 학생이 도둑맞을경우 남에게 빌려줄 수 없다는<br/>
대함정을 놓친 탓이었다.<br/>
문제를 풀수록 머리에서 나온 풀이를 짤 수 있는 능력은 상승하는데<br/>
문제를 이해하고, 함정들(경우들)을 파악하기 위해서는 더 집중하고<br/>
모든 경우에 대한 예외 사항이 없는지 파악해야겠다.<br/><br/><br/>

_2021 01 14_<br/>
**k번째 수**<br/>
이번에는 침착하게 문제를 읽고 주어진 조건을 확인했다.<br/>
반복해서 배열 문제들을 풀어서 그런지 해법과 사용할 명령이 바로 떠올랐다.<br/>
손쉽게 차근차근 코드를 짜갔고 역시나 한번에 통과<br/>
역시 침착함이 중요한 것 같다!<br/><br/><br/>

_2021 01 15_<br/>
**2016년**<br/>
2016년 a월 b일 의 요일을 리턴하는 문제<br/>
처음에는 30,31이 번갈아 나오는 월의 규칙을 이용한 연산을 만드려고 했다.<br/>
하지만 29일인 2월과 7,8월에서 연달아 나오는 31일 때문에<br/>
규칙을 찾는 시간이 훨씬 오래걸린다는 걸 깨닫는다.<br/>
그래서 생각한 방법은 a에 따라 중첩된 일의 수에 b를 더하고 %7의 값을 가져오고<br/>
요일을 넣어준 배열에서 골라내는 것<br/>
문제는 수월하게 통과했다. 그치만 12월까지밖에 월 보다 더 많은 수가 주어진다면<br/>
직접 1~12월일 때 중첩된 일의 수 또한 연산으로 컴퓨터가 도출하게 만드는 코드를<br/>
만들어야 할 것 같다.<br/><br/><br/>

_2021 01 19_<br/>
**3진법 뒤집기**<br/>
주어진 자연수 n을 3진법으로 바꾼 상태에서 뒤집은 후 다시 10진법으로 만드는 문제<br/>
풀이 과정을 한 단계 줄이기 위해 3진법으로 바꾸는 과정에서<br/>
unshift를 사용해 배열의 앞에서부터 값이 들어가게 했다.<br/>
다시 10진법으로 바꾸는 중 10^i를 썼는데 작동이 안돼 찾아보니<br/>
제곱을 하는 함수 Math.pow가 존재했다.. 암튼 순조롭게 패스-<br/>
좀 더 찾아보니 이미 자바스크립트에는 진법을 바꿔주는 함수가 존재했다ㅜㅜ<br/>
내장 함수를 이용해 단 4줄만의 코드를...<br/>
실제로 둘다 돌려보니 내장함수를 이용한 코드가 두배정도 빨랐다..<br/>
단순히 문제만 풀고 끝내지 말고 더 다양한 케이스/ 함수를 찾아 공부해야겠다.<br/><br/><br/>

_2021 01 20_<br/>
**가운데 글자 가져오기**<br/>
주어진 문자열이 홀수이면 가운데 한 글자/ 짝수이면 두 글자를 리턴하는 문제<br/>
주어진 문자열을 배열로 바꾼 후 배열의 길이를 2로 나눈 값을 통해 리턴시켰다.<br/>
split()만 알면 쉽게 풀리는 문제!<br/><br/><br/>

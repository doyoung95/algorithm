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

_2021 01 21_<br/>
**같은 숫자는 싫어**<br/>
배열에서 연속으로 같은 숫자가 나오면 한개만 남기는 배열을 리턴하는 문제<br/>
처음에는 for문을 통해 i와 i+1이 같으면 i+1을 삭제하는 식으로 진행했다.<br/>
정확성은 만점을 맞았지만 효율성을 통과하지 못했다.<br/>
그 이유는 i+1을 삭제하는 경우 i--를 통해 삭제된 다음 배열과 비교하는 작업이<br/>
추가 되기 때문이다. 이런 과정을 없애기 위해 조건(i !== i+1)을 사용했고 <br/>
두 값이 다를 경우 answer에 값을 push해 주었다. <br/><br/><br/>

_2021 01 22_<br/>
**나누어 떨어지는 숫자 배열**<br/>
배열 요소를 divisor로 나누어 떨어지는 값을 오름차순으로 리턴하는 문제<br/>
값이 하나도 없다면 배열에 -1을 담아 리턴하는 조건<br/>
for문으로 arr%divisor=0 을 찾아 배열에 넣고 비어있으면 [-1]을<br/>
차있으면 sort를 이용해 오름차순으로 리턴<br/><br/><br/>

_2021 01 23_<br/>
**두 정수 사이의 합**<br/>
두 정수 a,b 사이의 모든 정수의 합을 리턴하는 문제<br/>
두 수가 같으면 둘 중 하나의 수를 리턴한다<br/>
a,b의 대소를 if문으로 구분하고 각각 maxN,minN으로 선언<br/>
minN부터 maxN까지 for문을 통해 더해준다.<br/><br/><br/>

_2021 01 27_<br/>
**문자열 내 마음대로 정렬하기**<br/>
문자열로 구성된 배열과 임의의 정수 n이 주어졌을때 각 문자열의 n번째 글자를<br/>
기준으로 오름차순으로 정렬하고 n번째 글자가 같을경우 사전순으로 정렬하는 문제<br/>
우선 각 문자열의 n번째를 확인하기 위해 split을 이용하여 각 글자들을 배열로 만들었다.<br/>
다음 n번째에 있는 글자들을 각각 첫번째 자리로 이동시키고 오름차순으로 정렬시킨 후<br/>
다시 원래 있던 n번째 자리로 돌려보냈다. 결과는 정답!<br/>
그런데 뭔가 풀이가 깔끔하지 않아 다른 풀이를 흝어보던 중 맙소사.<br/>
꼭 다차원 배열이 아니더라도 변수[][]를 이용해 해당 문자열의 인덱스 번호를 확인할 수 있었다...<br/>
앞으로는 더 신선하고 좋은 풀이를 짤 수 있을 것 같다<br/><br/><br/>

_2021 01 29_<br/>
**문자열 내 p와 y의 개수**<br/>
대소문자가 임의로 섞여있는 문자열에서 p와y의 개수가 대소문자 구분 없이<br/>
같으면 true를 다르면 false를 리턴하는 문제<br/>
toLowerCase를 통해 문자열을 소문자로 바꿔주고 match를 통해 각각의 length값으로<br/>
두개의 개수를 비교했는데 계속 통과되지 않는 부분이 있었다.<br/>
고뇌하다가 찾아낸 것은 p나y가 존재하지 않을 때 match를 통해 길이를 구하면<br/>
오류가 떴던 것.. 조건문을 조금 수정한 뒤에 다시 코드를 돌려보니<br/>
풀리지 않던 부분은 통과가 되었는데 다른 부분들에 오류가 생겼다.<br/>
원인은 indexOf로 p와y를 찾을 때 인덱스 0번에 위치하게 되면<br/>
조건문 안에서 false를 반환해서 이상한 값을 리턴 했던 것..<br/>
코드가 지져분해졌지만 각각 조건을 더 달아서 수정 후 풀었다.<br/>
&&,||와 같은 논리 연산자를 쓸 때는 항상 값이 0을 리턴하지는 않는지<br/>
잘 확인해 봐야겠다.<br/><br/><br/>

_2021 01 29_<br/>
**문자열 내림 차순으로 배치하기**<br/>
내장함수를 사용하지 않고 직접 코드를 구현했으면<br/>
제법 피곤했을 문제였을 텐데<br/>
내장 함수들을 이용해 정렬시키니 손쉽게 풀린 문제<br/>
sort로 정렬을 시킬 때 대문자가 앞에 위치하게 된다는 걸 알 수 있었다.<br/><br/><br/>

_2021 01 29_<br/>
**문자열 다루기 기본**<br/>
문자열의 길이가 주어진 조건에 맞을 때,<br/>
문자열 안의 값이 숫자일 때 true를 아닐 때 false를 리턴하는 문제<br/>
조건문을 통해 어렵지 않게 짰는데 계속 오류가 났다.<br/>
그 이유는 소수점과 같은 것도 숫자로 취급해 .과 같은게 들어가면<br/>
숫자로 인식해서 통과하지 못했던 것이었다.<br/>
반복문을 통해 인덱스를 하나하나 숫자인지 확인해보니 통과<br/>
찾아보니 자바스크립트는 동적 타입 바인딩이란 시스템으로 이루어져서<br/>
때로는 개발자의 의도와 다르게 변수의 타입이 저장되어 오류가 난다고 한다.😂<br/><br/><br/>

_2021 01 30_<br/>
**서울에서 김서방 찾기**<br/>
indexOf를 이용해 Kim의 인덱스 번호를 받아와 출력<br/>
간단한 문제!<br/><br/><br/>

_2021 01 30_<br/>
**신규 아이디 추천**<br/>
조건들을 if문으로 넣어주기만 하면 해결되는 간단한 문제<br/>
2번 조건때문에 정규식을 사용하는게 처음이라 조금 힘들었다..<br/><br/><br/>

_2021 02 04_<br/>
**소수 찾기**<br/>
지금까지 나를 가장 힘들게 한 문제..<br/>
소수를 찾기위해 에라토스테네스의 체를 구현해야 하는데<br/>
정말 효율성을 만족시키는게 극악이었다.<br/>
단 한 번의 불필요한 연산도 하지 않아야 통과할 수 있다니..<br/><br/><br/>

_2021 02 04_<br/>
**수박수박수박수?**<br/>
반복문을 통해 홀수일때 수, 짝수일때 박을 한번씩 넣어주어 통과<br/>
내장함수 repeat()을 이용하면 훨씬 간단하게 풀 수 있다.<br/>
repeat()은 문자열을 원하는 만큼 반복시켜주는 함수!<br/><br/><br/>

_2021 02 04_<br/>
**문자열을 정수로 바꾸기**<br/>
자바스크립트 내장함수 Number()를 사용해 통과<br/>
Number()는 데이터 형식을 숫자로 바꿔준다.<br/><br/><br/>

_2021 02 04_<br/>
**시저 암호**<br/>
s의 문자열을 n만큼 미뤄진 문자열로 바꿔서 리턴하는 문제<br/>
처음에는 replace를 사용해서 접근했으나<br/>
replace를 할 경우 한 번 바꿔진 녀석을 또 바꿔버려<br/>
문자열로 바꿔 인덱스 번호를 통해 문제를 풀었다.<br/><br/><br/>

_2021 02 05_<br/>
**내적**<br/>
내적은 두개의 길이가 같은 배열의 각 요소의 곱을 합산한 값이다.<br/>
배열 하나를 reduce( ) 를 걸어 해당 값과 나머지 배열의 해당 인덱스 번호를 곱해 리턴했다.<br/><br/><br/>

_2021 02 05_<br/>
**약수의 합**<br/>
정수 n의 모든 약수의 합을 구하는 문제<br/>
반복문으로 1부터 n이 나누어 떨어지는 지 확인해 나누어 떨어지는 수를 더했다. <br/><br/><br/>

_2021 02 05_<br/>
**이상한 문자 만들기**<br/>
주어진 문자열은 대/소문자가 랜덤으로 들어간 단어들이 띄어쓰기로 나눠져 들어가있다.<br/>
띄어쓰기를 기준으로 각 단어의 짝수는 대문자 홀수는 소문자로 바꾸는 문제<br/>
처음에는 replace를 사용해서 풀었으나 hello와 같이 연속된 요소가 있으면<br/>
그녀석을 자꾸 바꿔 오류가 났다. 대안으로 선택한 방법은 띄어쓰기를 만나면<br/>
다시 대문자로 바꾸는 과정부터 시작해주는 방법. 공백을 만나면 true가 되는<br/>
변수를 만들어줌으로 통과!<br/><br/><br/>

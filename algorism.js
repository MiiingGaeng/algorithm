//32 내적
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요. 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// function solution(a, b) {
//   var answer = 0;

//   for(let i=0; i<a.length; i++){
//       answer += a[i]*b[i];
//   }

//   return answer
// };

//33 약수의 개수와 덧셈
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// function solution(left, right) {
//   let answer = 0;
//   //left ~ right 반복
//   for(let i=left; i<= right; i++){
//       let count = 0;
//       //j = i의 약수
//       for(let j=1; j<=i; j++){
//           if(i%j===0){
//               count ++;
//           }
//       }

//       //약수의 수 = 짝수 조건문
//       (count % 2 === 0) ? answer+=i : answer-=i;
//   }

//   return answer
// }

// 다른사람 풀이 = 제곱근이 정수면 약수의 개수가 홀수

//34 문자열 내림차순으로 배치하기
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요. s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// function solution(s) {
//   return s.split('').sort().reverse().join('');
// }

//split = 나눠서 배열만들기
//sort = 오름차순 정렬
//reverse = 반대로 정렬(즉, 내림차순)
//join = 문자열로 합치기

//35 부족한 금액 계산하기
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다. 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요. 단, 금액이 부족하지 않으면 0을 return 하세요.

// function solution(price, money, count) {
//   let totalPrice = 0;

//   for(let i=1; i <= count; i++){
//       totalPrice += price * i;
//   }

//   //조건문 추가!
//   if(totalPrice > money){
//    return parseInt(totalPrice - money);
//   } else{
//   return 0;
//   }
// }

//36 문자열 다루기 기본
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

//왜 안되지...
// function solution(s) {
//   if(s.length == 4 || s.length == 6){
//     return !Number.isNaN(Number(s))
//   }else{
//     return false;
//   }
// };
//e = 자연상수 (Math.E) 값으로 인식된다
//그래서 '12e1'가 true로 떠서 실패

// function solution(s) {
//   if(s.length == 4 || s.length == 6){
//     var answer = true;
//     var arr = s.split('');

//     for(let i=0; i<arr.length; i++){
//       if(Number.isNaN(Number(arr[i])) === true){
//         answer = false;
//         break;
//       }
//     }

//     return answer;
//   } else {
//     return false;
//   }
// }

//37 행렬의 덧셈
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// function solution(arr1, arr2) {
//   var answer = [];

//   //arr1,2의 배열(index i) 불러오기
//   for (let i = 0; i < arr1.length; i++) {
//     let test = [];
//     //arr1,2의 배열(index i)의 인덱스 값(index j) 불러오기
//     for (let j = 0; j < arr1[i].length; j++) {
//       test.push(arr1[i][j] + arr2[i][j]);
//     }
//     answer.push(test);
//   }

//   return answer;
// }

//38 직사각형 별찍기
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다. 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', (data) => {
//   //data = n,m
//   const num = data.split(' ');
//   //n과 m 값을 숫자로
//   const a = Number(num[0]),
//     b = Number(num[1]);

//   //세로값(m) 반복
//   for (let i = 0; i < b; i++) {
//     //가로값(n)만큼 별 출력
//     console.log('*'.repeat(a));
//   }
// });

//39 최대공약수와 최대공배수
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// function solution(n, m) {
//   //유클리드 호제법
//   const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
//   const lcm = (a, b) => (a * b) / gcd(a, b);
//   return [gcd(n, m), lcm(n, m)];
// }

//40 3진법 뒤집기
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   //3진수 배열 만들고 뒤집고 합체
//   var arrN3 = [...n.toString(3)];
//   var revN3 = arrN3.reverse().join('');

//   //3진수를 10진수로 만들기
//   return parseInt(revN3, 3);
// }

//과제1 문자열 연습하기
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// function solution(s) {
//   var arrS = s.toLowerCase().split('');
//   var numP = arrS.filter((item) => item === 'p');
//   var numY = arrS.filter((item) => item === 'y');

//   if (numP.length === 0 && numY.length === 0) {
//     return true;
//   } else if (numP.length === numY.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

//과제2 반복문,조건문 연습
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// function solution(abs, signs) {
//   var answer = 0;

//   for (let i = 0; i < abs.length; i++) {
//     if (signs[i] === true) {
//       answer += abs[i];
//     } else {
//       answer -= abs[i];
//     }
//   }

//   return answer;
// }

//41 이상한 문자 만들기
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

//first try = fail
//문장의 인덱스가 아닌 단어별 인덱스로 리턴해야함
// function solution(s) {
//   var arrS = s.split('');

//   for (let i = 0; i < arrS.length; i++) {
//     if (i % 2 === 0) {
//       var upperS = arrS[i].toUpperCase();
//       arrS.splice(i, 1, upperS);
//     } else {
//       var lowerS = arrS[i].toLowerCase();
//       arrS.splice(i, 1, lowerS);
//     }
//   }

//   return arrS.join('');
// }

//second try
// function solution(string) {
//   let answer = [];
//   let words = string.split(' ');

//   for (let i = 0; i < words.length; i++) {
//     let word = [];
//     for (let j = 0; j < words[i].length; j++) {
//       word.push(j % 2 === 0 ? words[i][j].toUpperCase() : words[i][j].toLowerCase());
//     }
//     answer.push(word.join(''));
//   }
//   return answer.join(' ');
// }

//42 삼총사
// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다. 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// function solution(number) {
//   let count = [];

//   for (let i = 0; i < number.length - 2; i++) {
//     for (let j = i + 1; j < number.length - 1; j++) {
//       for (let k = j + 1; k < number.length; k++) {
//         if (number[i] + number[j] + number[k] === 0) {
//           count.push([number[i], number[j], number[k]]);
//         }
//       }
//     }
//   }

//   return count.length;
// }

//43 크기가 작은 문자열
//숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

// function solution(t, p) {
//   let answer = [];
//   let numP = Number(p);
//   let pLth = p.length;
//   let tLth = t.length;

//   //tLth - pLth + 1 하는 이유 = tLth 마지막 글자까지 i가 도는걸 방지
//   for (let i = 0; i < tLth - pLth + 1; i++) {
//     let sliceT = t.slice(i, i + pLth);
//     let numT = Number(sliceT);

//     if (numT <= numP) {
//       answer.push(numT);
//     }
//   }

//   return answer.length;
// }

//44 최소직사각형
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다. 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

// function solution(sizes) {
//   let arrW = [];
//   let arrH = [];
//   let arrS = [];

//   for (let i = 0; i < sizes.length; i++) {
//     arrS[i] = sizes[i].sort((a, b) => b - a);
//     arrW.push(arrS[i][0]);
//     arrH.push(arrS[i][1]);
//   }

//   return Math.max(...arrW) * Math.max(...arrH);
// }

//45 시저암호
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// function solution(s, n) {
//   const low = 'abcdefghijklmnopqrstuvwxyz';
//   const up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   let arrS = s.split('');
//   let answer = [];

//   for (let i = 0; i < arrS.length; i++) {
//     let char = arrS[i];
//     if (low.includes(char)) {
//       const lowIndex = (low.indexOf(char) + n) % 26;
//       answer.push(low[lowIndex]);
//     } else if (up.includes(char)) {
//       const upIndex = (up.indexOf(char) + n) % 26;
//       answer.push(up[upIndex]);
//     } else {
//       answer.push(' ');
//     }
//   }

//   return answer.join('');
// }

//45 숫자 문자열과 영단어
//네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

//테스트는 통과/결과는 실패
// function solution(s) {
//   var numToEng = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eigth',
//     'nine',
//   ];

//   for (let i = 0; i < 10; i++) {
//     if (s.includes(numToEng[i])) {
//       //replaceAll에서 일치항목을 찾기 때문에 if문이 필요 없다.
//       s = s.replaceAll(numToEng[i], i);
//     }
//   }

//   return Number(s);
// }

//해결
// function solution(s) {
//   var numToEng = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine',
//   ];

//   for (let i = 0; i < 10; i++) {
//     s = s.replaceAll(numToEng[i], i);
//   }

//   return Number(s);
// }

//과제3 문자열 내 마음대로 정렬하기
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// function solution(strings, n) {
//   let answer = [];
//   let arr = [];

//   //strings 요소 word 찾기
//   strings.forEach((word) => {
//     //word에 n번째 글자 찾기
//     let wordChar = word.charAt(n);
//     //해당인덱스 글자 앞에 붙이기
//     let indexWord = wordChar.concat(word);
//     arr.push(indexWord);
//   });
//   //정렬하기
//   arr = arr.sort();
//   //앞글자 삭제하기
//   arr.forEach((s) => {
//     let answerW = s.substring(1);
//     answer.push(answerW);
//   });

//   return answer;
// }

//다른사람의 답변
// function solution(strings, n) {
//   // strings 배열
//   // n 번째 문자열 비교
//   return strings.sort((s1, s2) =>
//     s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
//   );
// }

//프로그래머스 2일차
//배열 두배 만들기
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(numbers) {
//   let answer = [];
//   numbers.forEach((number) => {
//     answer.push(number * 2);
//   });

//   return answer;
// }

//프로그래머스 3일차
//나머지 구하기
//정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

// function solution(num1, num2) {
//   return num1 % num2;
// }

//과제4 나이든 유저
// 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요

// var user = {
//   name: 'john',
//   age: 20,
// };

// var getAged = function (user, passedTime) {
//   // 여기를 작성해 주세요!
// };

// var agedUser = getAged(user, 6);

// var agedUserMustBeDifferentFromUser = function (user1, user2) {
//   if (!user2) {
//     console.log("Failed! user2 doesn't exist!");
//   } else if (user1 !== user2) {
//     console.log(
//       'Passed! If you become older, you will be different from you in the past!'
//     );
//   } else {
//     console.log('Failed! User same with past one');
//   }
// };

// agedUserMustBeDifferentFromUser(user, agedUser);

//48 K번째수
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다. 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면 array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다. 2에서 나온 배열의 3번째 숫자는 5입니다. 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

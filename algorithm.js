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
//   //빈 객체 생성 후 user 객체 복사
//   let other = {};
//   for (let index in user) {
//     other[index] = user[index];
//   }

//   //other유저의 나이에 passedTime 더하기
//   other.age += passedTime;
//   //더한 나이의 유저 반환
//   return other;
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

// function solution(array, commands) {
//   let answer = [];

//   commands.forEach((command) => {
//     let i = command[0] - 1;
//     let j = command[1];
//     let k = command[2] - 1;

//     let sliceArr = array.slice(i, j).sort((a, b) => a - b);
//     //sort()만 쓸 경우 문자열로 변환해서 정렬하기 때문에 오류가 발생할 수 있다.
//     //즉, [2, 3, 10]이 아닌 [10, 2, 3]으로 정렬될 가능성이 있다.
//     //따라서 정렬기준 함수를 같이 작성해주는 것이 더 정확하다.
//     answer.push(sliceArr[k]);
//   });

//   return answer;
// }

//프로그래머스 3일차
//중앙값 구하기
//중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

// function solution(array) {
//   array = array.sort((a, b) => a - b);
//   let centerNum = Math.round(array.length / 2);

//   return array[centerNum - 1];
// }

// //한줄로 줄여보기!
// function solution(array) {
//   return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
// }

//최빈값 구하기
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// function solution(array) {
//   if (array.length <= 1) return array[0];

//   const obj = {};
//   const answer = [];

//   //obj에 key=해당숫자 / value=개수 쌍 넣기
//   array.forEach((num) => {
//     obj[num] = ++obj[num] || +1;
//   });
//   //obj key-value 객체로 넣기
//   for (let key in obj) {
//     answer.push([key, obj[key]]);
//   }
//   //answer 개수 많은 순으로 정렬
//   answer.sort((a, b) => b[1] - a[1]);
//   //최빈값 여러개일 때 -1 반환
//   if (answer.length > 1 && answer[0][1] === answer[1][1]) return -1;
//   //최빈값 1개일 때 해당숫자 반환
//   return Number(answer[0][0]);
// }

//짝수는 싫어요
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   var answer = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) {
//       answer.push(i);
//     }
//   }

//   return answer;
// }

//과제5 어떤 매치가 성사될까
// 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// var fullname = 'Ciryl Gane';

// var fighter = {
//   fullname: 'John Jones',
//   opponent: {
//     fullname: 'Francis Ngannou',
//     getFullname: function () {
//       console.log(this); //{ opponent }
//       return this.fullname;
//     },
//   },

//   getName: function () {
//     console.log(this); //{ fighter }
//     return this.fullname;
//   },

//   getFirstName: () => {
//     console.log(this); //{ window }
//     return this.fullname.split(' ')[0];
//   },

//   getLastName: (function () {
//     return this.fullname.split(' ')[1];
//   })(),
// };

// console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
// console.log(
//   'It is',
//   fighter.getName(),
//   'VS',
//   fighter.getFirstName(),
//   fighter.getLastName
// );

//출력결과
// Not Francis Ngannou VS John Jones
// It is John Jones VS Ciryl Gane

//이유
// fighter.opponent.getFullname() = Francis Ngannou
// getFullname()은 opponent의 메서드로 호출됐기 때문에, opponent의 fullname의 value인 'Francis Ngannou'를 반환한다.

// fighter.getName() = John Jones
// getName() 또한 fighter의 메서드로 호출됐기 때문에, fighter의 fullname의 value인 'John Jones'를 반환한다.

// fighter.getFirstName() = Ciryl
// 화살표 함수는 this 바인딩을 하지 않는다. 즉, 화살표 함수의 this는 상위의 this를 바라보기 때문에, getFirstName의 this는 전역객체를 바인딩한다. 따라서 getFirstName()은 'Ciryl'을 반환한다.

// fighter.getLastName = Gane
// fighter는 getLastName의 호출주체가 아니기 때문에, getLastName의 함수는 함수로서 호출되었다. 즉, getLastName의 this는 전역객체를 바인딩하기 때문에 'Gane'을 반환한다.

//49 두 개 뽑아서 더하기
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// function solution(numbers) {
//   //중복값 없애기 = Set 활용
//   let answer = new Set();

//   //[i] + [j] 더한 값 set에 add하기
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       answer.add(numbers[i] + numbers[j]);
//     }
//   }

//   //set을 배열로 만들기 + 정렬
//   return Array.from(answer).sort((a, b) => a - b);
// }

//프로그래머스 4일차
//세균증식
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

// function solution(n, t) {
//   for (let i = 1; i <= t; i++) {
//     n *= 2;
//   }

//   return n;
// }

// //다른사람 풀이
// function solution(n, t) {
//   return n * Math.pow(2, t); // Math.pow(2, t)는 2의 t승을 계산하는 함수
// }

//양꼬치
//머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

// function solution(n, k) {
//   let totalDrinks = 0;
//   let howMany = Math.floor(n / 10);

//   n >= 10 ? (totalDrinks = k - howMany) : (totalDrinks = k);

//   return n * 12000 + totalDrinks * 2000;
// }

// //다른사람 풀이
// function solution(n, k) {
//   return n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
// }

//편지
// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.

// function solution(message) {
//   return 2 * message.length;
// }

//문자열 뒤집기
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// function solution(string) {
//   let arr = string.split('');
//   return arr.reverse().join('');
// }

// //한줄로 작성해보기
// function solution(string) {
//   return string.split('').reverse().join('');
// }

//순서쌍의 개수
//순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) arr.push(i);
//   }

//   return arr.length;
// }

//50 가장 가까운 같은 글자
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 다음과 같이 진행할 수 있습니다.
// b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
// n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
// a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
// 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

// function solution(string) {
//   let answer = [];
//   let arrS = string.split('');

//   for (let i = 0; i < arrS.length; i++) {
//     let slicedS = arrS.slice(0, i);
//     //slice는 바로 앞까지만 잘린다는걸 잊지말자!!!
//     let lastIndex = slicedS.lastIndexOf(arrS[i]);
//     answer.push(lastIndex === -1 ? lastIndex : slicedS.length - lastIndex);
//   }

//   return answer;
// }

//5일차
//배열 원소의 길이
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(strlist) {
//   let answer = [];
//   strlist.forEach((word) => {
//     answer.push(word.length);
//   });

//   return answer;
// }

//점의 위치 구하기
// function solution(dot) {
//   let sign1 = Math.sign(dot[0]);
//   let sign2 = Math.sign(dot[1]);

//   if (sign1 === 1 && sign2 === 1) {
//     return 1;
//   } else if (sign1 === 1 && sign2 === -1) {
//     return 4;
//   } else if (sign1 === -1 && sign2 === 1) {
//     return 2;
//   } else {
//     return 3;
//   }
// }

// //다른 사람 풀이
// function solution(dot) {
//   return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
// }
// //삼항연산자 중첩으로 사용 가능!!

//모음 제거
// function solution(string) {
//   let answer = [];
//   const vowel = ['a', 'e', 'i', 'o', 'u'];
//   string = [...string];
//   string.filter((char) => {
//     if (!vowel.includes(char)) answer.push(char);
//   });

//   return answer.join('');
// }
// //필터 제대로 써먹지 못함..ㅠ

// //다른 사람 풀이
// function solution(my_string) {
//   return Array.from(my_string)
//     .filter((t) => !['a', 'e', 'i', 'o', 'u'].includes(t))
//     .join('');
// }

// 51 푸드파이터 대회
// 수웅이는 매달 주어진 음식을 빨리 먹는 푸드 파이트 대회를 개최합니다. 이 대회에서 선수들은 1대 1로 대결하며, 매 대결마다 음식의 종류와 양이 바뀝니다. 대결은 준비된 음식들을 일렬로 배치한 뒤, 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로, 다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다. 중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.
// 이때, 대회의 공정성을 위해 두 선수가 먹는 음식의 종류와 양이 같아야 하며, 음식을 먹는 순서도 같아야 합니다. 또한, 이번 대회부터는 칼로리가 낮은 음식을 먼저 먹을 수 있게 배치하여 선수들이 음식을 더 잘 먹을 수 있게 하려고 합니다. 이번 대회를 위해 수웅이는 음식을 주문했는데, 대회의 조건을 고려하지 않고 음식을 주문하여 몇 개의 음식은 대회에 사용하지 못하게 되었습니다.
// 예를 들어, 3가지의 음식이 준비되어 있으며, 칼로리가 적은 순서대로 1번 음식을 3개, 2번 음식을 4개, 3번 음식을 6개 준비했으며, 물을 편의상 0번 음식이라고 칭한다면, 두 선수는 1번 음식 1개, 2번 음식 2개, 3번 음식 3개씩을 먹게 되므로 음식의 배치는 "1223330333221"이 됩니다. 따라서 1번 음식 1개는 대회에 사용하지 못합니다.
// 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.

// function solution(food) {
//   let answer = '';

//   for (let i = 0; i < food.length; i++) {
//     //2로 나눈 몫 = count 숫자 구하기
//     let count = Math.floor(food[i] / 2);
//     for (let j = 0; j < count; j++) {
//       //j(count)개 만큼 i(123)추가
//       answer += i;
//     }
//   }
//   //문자열 뒤집어서 붙이기
//   let reverse = answer.split('').reverse().join('');
//   return answer + '0' + reverse;
// }

// //다른 사람 풀이

// function solution(food) {
//   let answer = '';
//   for (let i = 0; i < food.length; i++) {
//     let count = Math.floor(food[i] / 2);
//     answer += i.toString().repeat(count);
//   }

//   return answer + 0 + [...answer].reverse().join('');
// }

//6일차
//배열 뒤집기
//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(num_list) {
//   return num_list.reverse();
// }

//배열 자르기
//정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// function solution(numbers, num1, num2) {
//   return numbers.slice(num1, num2 + 1);
// }

//특정 문자 제거하기
//문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// function solution(my_string, letter) {
//   return my_string.replaceAll(letter, '');
// }

//피자 나눠 먹기 3
//머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// function solution(slice, n) {
//   return Math.ceil(n / slice);
// }

//머쓱이보다 키큰 사람
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

// function solution(array, height) {
//   const taller = [];
//   array.forEach((arr) => {
//     if (arr > height) taller.push(arr);
//   });

//   return taller.length;
// }

//중복된 숫자개수
//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// function solution(array, n) {
//   const answer = [];
//   array.filter((num) => {
//     if (num === n) answer.push(num);
//   });

//   return answer.length;
// }

//피자 나눠 먹기 1
//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

// function solution(n) {
//   return Math.ceil(n / 7);
// }

//옷가게 할인 받기
//머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다. 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

// function solution(price) {
//   return price >= 500000
//     ? parseInt(price * 0.8)
//     : price >= 300000
//     ? parseInt(price * 0.9)
//     : price >= 100000
//     ? parseInt(price * 0.95)
//     : price;
// }

//과제6
//아래의 코드를 async/await 로 리팩토링 하기

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// //리팩토링 부분
// async function loadJson(url) {
//   const response = await fetch(url);

//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }

// async function koreanMovie() {
//   let res;
//   while (true) {
//     try {
//       res = await loadJson(
//         `https://klassic-quote-api.mooo.com/v1/random-quote`
//       );
//       break;
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert('무언가 에러가 발생했군요!');
//         return koreanMovie();
//       } else {
//         throw err;
//       }
//     }
//   }

//   alert(`${res.author}: ${res.quote}`);
//   return res;
// }

// koreanMovie();

//52 콜라 문제
// 오래전 유행했던 콜라 문제가 있습니다. 콜라 문제의 지문은 다음과 같습니다.
// 정답은 아무에게도 말하지 마세요.
// 콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다. 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가?
// 단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다.

// 문제를 풀던 상빈이는 콜라 문제의 완벽한 해답을 찾았습니다. 상빈이가 푼 방법은 아래 그림과 같습니다. 우선 콜라 빈 병 20병을 가져가서 10병을 받습니다. 받은 10병을 모두 마신 뒤, 가져가서 5병을 받습니다. 5병 중 4병을 모두 마신 뒤 가져가서 2병을 받고, 또 2병을 모두 마신 뒤 가져가서 1병을 받습니다. 받은 1병과 5병을 받았을 때 남은 1병을 모두 마신 뒤 가져가면 1병을 또 받을 수 있습니다. 이 경우 상빈이는 총 10 + 5 + 2 + 1 + 1 = 19병의 콜라를 받을 수 있습니다.
// 문제를 열심히 풀던 상빈이는 일반화된 콜라 문제를 생각했습니다. 이 문제는 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다. 기존 콜라 문제와 마찬가지로, 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다. 상빈이는 열심히 고심했지만, 일반화된 콜라 문제의 답을 찾을 수 없었습니다. 상빈이를 도와, 일반화된 콜라 문제를 해결하는 프로그램을 만들어 주세요. 콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다. 상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.

// function solution(a, b, n) {
//   var count = 0;

//   //빈병으로 못 바꿀 때까지 반복
//   while (n >= a) {
//     let quotient = Math.floor(n / a); //몫
//     let get = b * quotient; //바꾼 콜라병의 수

//     //전체 개수 = 총 - 바꾼 빈병 개수 + 바꾼 콜라병
//     n = (n % a) + get;
//     count += get;
//   }

//   return count;
// }

//7일차
//짝수 홀수 개수
//정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// function solution(num_list) {
//   let even = num_list.filter((num) => num % 2 === 0).length;
//   let odd = num_list.filter((num) => num % 2 === 1).length;

//   return [even, odd];
// }

//문자열 안에 문자열
//문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// function solution(str1, str2) {
//   return str1.includes(str2) ? 1 : 2;
// }

//최댓값 만들기
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// function solution(numbers) {
//   numbers = numbers.sort((a, b) => a - b);
//   let maxIndex = numbers.length - 1;

//   return numbers[maxIndex] * numbers[maxIndex - 1];
// }

//다른 사람 풀이
//내림차순으로 하면 더 쉽게 접근할 수 있다!
// function solution(numbers) {
//   numbers.sort((a, b) => b - a);
//   return numbers[0] * numbers[1];
// }

//배열의 유사도
//두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

// function solution(s1, s2) {
//   let count = 0;
//   s1.map((item) => {
//     if (s2.includes(item)) count++;
//   });

//   return count;
// }

//53 명예의 전당
// "명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들의 문자 투표수로 가수에게 점수를 부여합니다. 매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다. 즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다. k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.
// 이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다. 예를 들어, k = 3이고, 7일 동안 진행된 가수의 점수가 [10, 100, 20, 150, 1, 100, 200]이라면, 명예의 전당에서 발표된 점수는 아래의 그림과 같이 [10, 10, 10, 20, 20, 100, 100]입니다.
// 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.

//실패
// function solution(k, score) {
//   const answer = [];
//   //k번째 날까지 모든 참가자 넣기
//   for (let i = 0; i < k; i++) {
//     answer.push(score[i]);
//     answer.sort((a, b) => a - b);
//   }
//   console.log('1:' + answer);
//   //k번째 이후
//   for (let j = k; j < score.length; j++) {
//     let lastIdx = j - 1;
//     if (score[j] >= answer[lastIdx]) {
//       answer.push(score[j]);
//     } else if (score[j] < answer[lastIdx] && score[j] >= answer[0]) {
//       if (score[j] === answer[0]) {
//         answer.unshift(score[j]);
//       } else {
//         let findIdx = answer.findIndex((num) => num > score[j]);
//         answer.splice(findIdx, 0, score[j]);
//       }
//     }
//   }

//   console.log('2:' + answer);
//   console.log(score);
// }

//다시 도전
// function solution(k, score) {
//   const answer = [];
//   const honor = [];

//   for (let i = 0; i < score.length; i++) {
//     if (honor.length < k) {
//       honor.push(score[i]);
//       honor.sort((a, b) => a - b);
//     } else {
//       honor.push(score[i]);
//       honor.sort((a, b) => a - b);
//       honor.shift();
//     }

//     answer.push(honor[0]);
//   }

//   return answer;
// }

//8일차
//문자 반복 출력하기
//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

// function solution(my_string, n) {
//   const arr = my_string.split('');
//   return arr.map((char) => char.repeat(n)).join('');
// }

// //한줄로 줄여보기
// function solution(my_string, n) {
//   return my_string
//     .split('')
//     .map((char) => char.repeat(n))
//     .join('');
// }

//아이스아메리카노
//머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// function solution(money) {
//   return [Math.floor(money / 5500), money % 5500];
// }

//가위 바위 보
//가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

// function solution(rsp) {
//   const answer = [];
//   rsp.split('').map((num) => {
//     num === '0'
//       ? answer.push(5)
//       : num === '5'
//       ? answer.push(2)
//       : num === '2'
//       ? answer.push(0)
//       : answer.push('');
//   });

//   return answer.join('');
// }

// //다른 사람 풀이
// function solution(rsp) {
//   let arr = {
//     2: 0,
//     0: 5,
//     5: 2,
//   };
//   var answer = [...rsp].map((v) => arr[v]).join('');
//   return answer;
// }

//54 2016년
//2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

//첫시도
// function solution(a, b) {
//   const dateIn2016 = a === 1 ? b : Math.floor(30.5 * (a - 1) + b);
//   const date = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
//   let idx = dateIn2016 % 7;
//   return date[idx];
// }

// //제출 정답
// function solution(a, b) {
//   const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   const date = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
//   let day = b;

//   for (let i = 0; i < a - 1; i++) {
//     day += month[i];
//   }

//   return date[day % 7];
// }

// //다른 사람 풀이
// function solution(a, b) {
//   const date = new Date(2016, a - 1, b);
//   const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

//   return day[date.getDay()];
// }
//Date생성자, Date.getDay() 메서드!

//9일차
//주사위 개수
//머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

// function solution(box, n) {
//   let answer = 1;
//   box.forEach((num) => (answer *= Math.floor(num / n)));

//   return answer;
// }

//숨어있는 숫자의 덧셈(1)
//문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// function solution(my_string) {
//   let answer = 0;
//   const findNum = my_string.split('').filter((char) => parseInt(char, 10));

//   findNum.forEach((num) => (answer += Number(num)));
//   return answer;
// }

//최댓값 만들기(2)
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// function solution(numbers) {
//   const sorted = numbers.sort((a, b) => b - a);
//   const lastIdx = numbers.length - 1;

//   return sorted[0] * sorted[1] > sorted[lastIdx] * sorted[lastIdx - 1]
// ? sorted[0] * sorted[1]
//     : sorted[lastIdx] * sorted[lastIdx - 1];
// }

//대문자와 소문자
//문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
// function solution(my_string) {
//   const arr = my_string.split('');
//   return arr
//     .map((char) => (char >= 'a' ? char.toUpperCase() : char.toLowerCase()))
//     .join('');
// }

//55 카드 뭉치
//코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.
// 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
// 한 번 사용한 카드는 다시 사용할 수 없습니다.
// 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
// 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
// 예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 ["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.
// 문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

// function solution(cards1, cards2, goal) {
//   for (let i = 0; i < goal.length; i++) {
//     //goal 순회하면서 cards 첫번째 요소 제거하기
//     if (goal[i] === cards1[0]) {
//       cards1.shift();
//     } else if (goal[i] === cards2[0]) {
//       cards2.shift();
//     } else {
//       //없으면 바로 no 반환
//       return 'No';
//     }
//   }

//   //다 끝나면 yes 반환
//   return 'Yes';
// }

//10일차
//삼각형의 완성조건(1)
//선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다. 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다. 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

// function solution(sides) {
//   sides.sort((a, b) => b - a);
//   return sides[0] < sides[1] + sides[2] ? 1 : 2;
// }

//자릿수 더하기
//정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// function solution(n) {
//   let answer = 0;
//   String(n)
//     .split('')
//     .forEach((num) => (answer += Number(num)));

//   return answer;
// }

//다른 사람 풀이 : reduce!!!
// function solution(n) {
//   return n
//     .toString()
//     .split('')
//     .reduce((acc, cur) => acc + Number(cur), 0);
// }

//인덱스 바꾸기
//문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// function solution(string, num1, num2) {
//   const str1 = string.slice(num1, num1 + 1);
//   const str2 = string.slice(num2, num2 + 1);
//   const strArr = string.split('');

//   strArr[num1] = str2;
//   strArr[num2] = str1;

//   return strArr.join('');
// }

//다른 사람 풀이 : 구조분해 응용
// function solution(my_string, num1, num2) {
//   let arr = my_string.split('');
//   [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
//   return arr.join('');
// }

//56 과일장수
//과일 장수가 사과 상자를 포장하고 있습니다. 사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, k점이 최상품의 사과이고 1점이 최하품의 사과입니다. 사과 한 상자의 가격은 다음과 같이 결정됩니다.
// 한 상자에 사과를 m개씩 담아 포장합니다.
// 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
// 과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)

// 예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.
// (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

// function solution(k, m, score) {
//   //k=최상품, m=한 상자에 들어가는 사과 개수, score=사과 점수(배열)
//   let maxPrice = 0;

//   //역순 정렬 + 박스 총 개수
//   score = score.sort((a, b) => b - a);
//   let totalBox = Math.floor(score.length / m);

//   //박스 나누기 + 최솟값*m개 가격 넣기
//   for (let i = 0; i < totalBox; i++) {
//     let box = score.slice(i * m, (i + 1) * m);
//     maxPrice += box[m - 1] * m;
//   }

//   return maxPrice;
// }

//11일차
//약수 구하기
//정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   const answer = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) answer.push(i);
//   }

//   return answer;
// }

//n의 배수 고르기
//정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(n, numlist) {
//   return numlist.filter((num) => num % n === 0);
// }

//369게임
//머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

// function solution(order) {
//   return order
//     .toString(10)
//     .split('')
//     .filter((num) => num < 10 && num > 0 && num % 3 === 0).length;
// }

//배열 회전시키기
//정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(numbers, direction) {
//   if (direction === 'right') {
//     const spliceArrR = numbers.splice(numbers.length - 1, 1);
//     return spliceArrR.concat(numbers);
//   } else if (direction === 'left') {
//     const spliceArrL = numbers.splice(0, 1);
//     return numbers.concat(spliceArrL);
//   }
// }

//다른 사람 풀이
//pop이랑 shift가 있는데...! 난 왜 굳이 splice를 했을까...
// function solution(numbers, direction) {
//   direction === 'right'
//     ? numbers.unshift(numbers.pop())
//     : numbers.push(numbers.shift());
//   return numbers;
// }

//57 모의고사
//수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// function solution(answers) {
//   const supo1 = [1, 2, 3, 4, 5];
//   const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   let scores = [0, 0, 0];

//   //answers에서 정답개수 찾기
//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] === supo1[i % supo1.length]) {
//       scores[0]++;
//     }
//     if (answers[i] === supo2[i % supo2.length]) {
//       scores[1]++;
//     }
//     if (answers[i] === supo3[i % supo3.length]) {
//       scores[2]++;
//     }
//   }
//   //최대점수 찾기
//   const maxScore = Math.max(...scores);
//   //최대점수를 가진 사람의 인덱스 맵핑 + 정답자만 필터링
//   return scores
//     .map((score, idx) => {
//       return score === maxScore ? (score = idx + 1) : (score = 0);
//     })
//     .filter((supo) => supo > 0);
// }

//12일차
//가장 큰 수 찾기
//정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// function solution(array) {
//   const maxNum = Math.max(...array);
//   const maxIdx = array.indexOf(maxNum);

//   return [maxNum, maxIdx];
// }

//문자열 정렬하기
//문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

// function solution(string) {
//   const arr = string.split('');
//   const numArr = arr.filter((item) => Number.parseInt(item) || item === '0');

//   return numArr.sort((a, b) => a - b).map((item) => Number.parseInt(item));
// }

//다른 사람 풀이
// function solution(my_string) {
//   return my_string
//     .split('')
//     .filter((char) => !isNaN(char))
//     .map((number) => parseInt(number))
//     .sort((a, b) => a - b);
// }

//암호 해독
//군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
// 암호화된 문자열 cipher를 주고받습니다. 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

// function solution(cipher, code) {
//   const arr = cipher.split('');
//   let answer = [];
//   for (let i = 1; i * code <= arr.length; i++) {
//     let idx = i * code - 1;
//     answer.push(arr[idx]);
//   }

//   return answer.join('');
// }

//13일차
//직각삼각형 출력하기
//"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on('line', function (line) {
//   input = line.split(' ');
// }).on('close', function () {
//   //내 풀이
//   for (let i = 0; i < Number(input[0]); i++) {
//     let star = '';
//     for (let j = 0; j <= i; j++) {
//       star += '*';
//     }
//     console.log(star);
//   }
// });

// //다른 사람 풀이
// for (let i = 1; i <= +input[0]; i++) {
//   console.log('*'.repeat(i));
// }

//피자 나눠 먹기(2)
//머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// function solution(n) {
//   const gcd = (num1, num2) =>
//     num1 % num2 === 0 ? num2 : gcd(num2, num1 % num2);
//   const lcd = (num1, num2) => (num1 * num2) / gcd(num1, num2);

//   return lcd(n, 6) / 6;
// }

// //다른 사람 풀이
// function solution(n) {
//   let pizza = 1;
//   while ((pizza * 6) % n) {
//     pizza++;
//   }
//   return pizza;
// }

//숫자찾기
//정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// function solution(num, k) {
//   const numArr = num.toString().split('');
//   const idx = numArr.indexOf(k.toString());

//   return idx >= 0 ? idx + 1 : idx;
// }

//58 소수 만들기
//주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// function solution(nums) {
//   let count = 0;

//   //소수 판별 함수
//   function isDeciaml(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= num / 2; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   //요소 3개 더하기
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         let sum = nums[i] + nums[j] + nums[k];
//         if (isDeciaml(sum)) count++;
//       }
//     }
//   }
//   return count;
// }

//59 덧칠하기
//어느 학교에 페인트가 칠해진 길이가 n미터인 벽이 있습니다. 벽에 동아리 · 학회 홍보나 회사 채용 공고 포스터 등을 게시하기 위해 테이프로 붙였다가 철거할 때 떼는 일이 많고 그 과정에서 페인트가 벗겨지곤 합니다. 페인트가 벗겨진 벽이 보기 흉해져 학교는 벽에 페인트를 덧칠하기로 했습니다.

// 넓은 벽 전체에 페인트를 새로 칠하는 대신, 구역을 나누어 일부만 페인트를 새로 칠 함으로써 예산을 아끼려 합니다. 이를 위해 벽을 1미터 길이의 구역 n개로 나누고, 각 구역에 왼쪽부터 순서대로 1번부터 n번까지 번호를 붙였습니다. 그리고 페인트를 다시 칠해야 할 구역들을 정했습니다.

// 벽에 페인트를 칠하는 롤러의 길이는 m미터이고, 롤러로 벽에 페인트를 한 번 칠하는 규칙은 다음과 같습니다.

// 롤러가 벽에서 벗어나면 안 됩니다.
// 구역의 일부분만 포함되도록 칠하면 안 됩니다.
// 즉, 롤러의 좌우측 끝을 구역의 경계선 혹은 벽의 좌우측 끝부분에 맞춘 후 롤러를 위아래로 움직이면서 벽을 칠합니다. 현재 페인트를 칠하는 구역들을 완전히 칠한 후 벽에서 롤러를 떼며, 이를 벽을 한 번 칠했다고 정의합니다.

// 한 구역에 페인트를 여러 번 칠해도 되고 다시 칠해야 할 구역이 아닌 곳에 페인트를 칠해도 되지만 다시 칠하기로 정한 구역은 적어도 한 번 페인트칠을 해야 합니다. 예산을 아끼기 위해 다시 칠할 구역을 정했듯 마찬가지로 롤러로 페인트칠을 하는 횟수를 최소화하려고 합니다.

// 정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 매개변수로 주어질 때 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요.

// function solution(n, m, section) {
//   //페인트칠 n미터, 롤러길이 m미터, 칠해야 하는 구역 section

//   //칠하는 횟수
//   let answer = 0;
//   //칠한 구역
//   let painted = 0;

//   for (let i = 0; i < section.length; i++) {
//     //칠하지 않은 구역 칠하기
//     if (painted < section[i]) {
//       painted = section[i] + m - 1;
//       answer++;
//     }
//   }

//   return answer;
// }

//14일차
//외계 행성의 나이
//우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

// function solution(age) {
//   const arrChar = 'abcdefghij';
//   const arrAge = age.toString.split('');

//   return arrAge.map((num) => arrChar.charAt(num)).join('');
// }

// //다른 사람 풀이
// function solution(age) {
//   return age
//     .toString()
//     .split('')
//     .map((v) => 'abcdefghij'[v])
//     .join('');
// }

//문자열 정렬하기 (2)
//영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

// function solution(my_string) {
//   return my_string.toLowerCase().split('').sort().join('');
// }

//합성수 찾기
//약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   const arr = [];
//   for (let num = 1; num <= n; num++) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) count++;
//     }

//     if (count >= 3) arr.push(num);
//   }

//   return arr.length;
// }

//모스부호 (1)
//머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// function solution(letter) {
//   const morse = {
//     '.-': 'a',
//     '-...': 'b',
//     '-.-.': 'c',
//     '-..': 'd',
//     '.': 'e',
//     '..-.': 'f',
//     '--.': 'g',
//     '....': 'h',
//     '..': 'i',
//     '.---': 'j',
//     '-.-': 'k',
//     '.-..': 'l',
//     '--': 'm',
//     '-.': 'n',
//     '---': 'o',
//     '.--.': 'p',
//     '--.-': 'q',
//     '.-.': 'r',
//     '...': 's',
//     '-': 't',
//     '..-': 'u',
//     '...-': 'v',
//     '.--': 'w',
//     '-..-': 'x',
//     '-.--': 'y',
//     '--..': 'z',
//   };
//   const moseInLetter = letter.split(' ');

//   const readLetter = moseInLetter.map((item) => morse[item]);
//   return readLetter.join('');
// }

//개미군단
//개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

// function solution(hp) {
//   //genAnt와 solAnt는 각각 몇마리씩 필요한지 계산하는 변수
//   const gen = Math.floor(hp / 5);
//   const sol = Math.floor((hp - gen * 5) / 3);
//   const work = hp - gen * 5 - sol * 3;

//   return gen + sol + work;
// }

// //다른 사람 풀이
// function solution(hp) {
//   return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
// }

//15일차
//중복된 문자 제거
//문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

// function solution(string) {
//   return (arrS = string
//     .split('')
//     .filter((char, idx, arr) => arr.indexOf(char) === idx)
//     .join(''));
// }

//k의 개수
//1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

//실패
// function solution(i, j, k) {
//   let count = 0;

//   for (i; i <= j; i++) {
//     if (String(i).includes(String(k))) count++;
//   }

//   return count;
// }

//해결
//11의 경우 1의 개수가 1개로 잡혀서 테스트케이스에 실패했었다. 문자를 쪼개서 확인했어야했다.
// function solution(i, j, k) {
//   let count = 0;

//   for (i; i <= j; i++) {
//     const splitedNum = i.toString().split('');
//     splitedNum.map((num) => {
//       if (num.includes(k.toString())) count++;
//     });
//   }

//   return count;
// }

//A로 B 만들기
//문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// function solution(before, after) {
//   const b = before.split('').sort().join('');
//   const a = after.split('').sort().join('');

//   return a === b ? 1 : 0;
// }

//16일차
//진료 순서 정하기
//외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(emergency) {
//   const idxArr = [...emergency].sort((a, b) => b - a);
//   return emergency.map((ppl) => idxArr.indexOf(ppl) + 1);
// }

//2차원으로 만들기
//정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
//num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

// function solution(num_list, n) {
//   const answer = [];

//   for (let i = 0; i < num_list.length / n; i++) {
//     answer.push(num_list.slice(i * n, i * n + n));
//   }

//   return answer;
// }

//팩토리얼
//i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   let facI = 1;
//   let i = 0;

//   while (facI <= n) {
//     i++;
//     facI *= i;
//   }

//   return i - 1;
// }

//17일차
//숨어있는 숫자의 덧셈(2)
//문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

//실패
// function solution(my_string) {
//   const splited = my_string.split('');
//   const turnedIntoNum = splited
//     .map((item) =>
//       !parseInt(item) || item.toLowerCase() === 'e'
//         ? (item = '*')
//         : (item = parseInt(item))
//     )
//     .join('')
//     .split('*')
//     .filter((item) => item);

//   return turnedIntoNum
//     .map((item) => parseInt(item))
//     .reduce((acc, cur) => (acc += cur));
// }

//두번째 실패
//자연수 없을 때 예외처리 안함
// function solution(my_string) {
//   const splited = my_string.split(/[A-z]/g);
//   return splited
//     .filter((item) => item)
//     .map((item) => parseInt(item))
//     .reduce((acc, cur) => (acc += cur));
// }

//성공
// function solution(my_string) {
//   const splited = my_string.split(/[A-z]/g);
//   const filtered = splited.filter((item) => item);

//   return filtered.length
//     ? filtered.map((item) => parseInt(item)).reduce((acc, cur) => (acc += cur))
//     : 0;
// }

//다른 사람 풀이
//정규 표현식 알아보기
// function solution(my_string) {
//   return my_string
//     .replace(/[A-z]/g, ' ')
//     .split(' ')
//     .map((v) => v * 1)
//     .reduce((a, b) => a + b);
// }

//18일차
//가까운 수
//정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

//실패
// function solution(array, n) {
//   const newArr = [...array, n].sort((a, b) => a - b);
//   const idxN = newArr.indexOf(n);
//   if (idxN === newArr.length - 1) return newArr[idxN - 1];

//   const compareBefore = n - newArr[idxN - 1];
//   const compareAfter = newArr[idxN + 1] - n;

//   return compareBefore < compareAfter ? newArr[idxN - 1] : newArr[idxN + 1];
// }

//성공
//앞뒤 숫자와 N의 차이가 같을 경우 작은 수 반환 처리!!!
//문제를 잘 읽자!
// function solution(array, n) {
//   const newArr = [...array, n].sort((a, b) => a - b);
//   const idxN = newArr.indexOf(n);

//   //예외처리
//   if (idxN === newArr.length - 1) return newArr[idxN - 1];
//   if (idxN === 0) return newArr[1];

//   const compareBefore = n - newArr[idxN - 1];
//   const compareAfter = newArr[idxN + 1] - n;

//   return compareBefore <= compareAfter ? newArr[idxN - 1] : newArr[idxN + 1];
// }

//다른 사람 풀이
// function solution(array2, n) {
//   var array = [...array2].sort();
//   var cal = array.map((v) => Math.abs(v - n)); //요소에서 n뺀것을 절대값으로 표시
//   var cal2 = Math.min(...cal); //제일 가까운수의 값
//   var cal3 = cal.indexOf(cal2); //제일 가까운수의 인덱스

//   return array[cal3];
// }

//Math.abs : 숫자의 절대 값을 반환
// function solution(array, n) {
//   array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

//   return array[0];
// }

//한번만 등장한 문자
//문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// function solution(s) {
//   const arrS = s.split('');
//   const result = [];
//   arrS.forEach((char) => {
//     return s.indexOf(char) === s.lastIndexOf(char) ? result.push(char) : result;
//   });

//   return result.sort().join('');
// }

// //다른 사람 풀이
// function solution(s) {
//   let res = [];
//   for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
//   return res.sort().join('');
// }

//7의 개수
//머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

// function solution(array) {
//   let count = 0;
//   const mappedArr = array.map((item) => item.toString().split(''));

//   mappedArr.forEach((arr) => {
//     arr.forEach((num) => {
//       if (parseInt(num) === 7) count++;
//     });
//   });

//   return count;
// }

// //다른 사람 풀이
// function solution(array) {
//   return array
//     .join()
//     .split('')
//     .filter((el) => {
//       return el == '7';
//     }).length;
// }

//19일차
//컨트롤 제트
//숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

// function solution(s) {
//   const arrS = s.split(' ');
//   let answer = 0;

//   for (let i = 0; i < arrS.length; i++) {
//     arrS[i] !== 'Z'
//       ? (answer += parseInt(arrS[i]))
//       : (answer -= parseInt(arrS[i - 1]));
//   }

//   return answer;
// }

//다른 사람 풀이
//for...of문 / reduce
// function solution(s) {
//   s = s.split(' ');
//   let arr = [];
//   for (let v of s) v === 'Z' ? (arr.length ? arr.pop() : '') : arr.push(v);
//   return arr.reduce((a, v) => a + +v, 0);
// }

//이진수 더하기
//이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

// function solution(bin1, bin2) {
//   const num1 = parseInt(bin1, 2);
//   const num2 = parseInt(bin2, 2);

//   return (num1 + num2).toString(2);
// }

//잘라서 배열로 저장하기
//문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(my_str, n) {
//   const arrStr = my_str.split('');
//   const answer = [];

//   while (arrStr.length > 0) {
//     answer.push(arrStr.splice(0, n).join(''));
//   }

//   return answer;
// }

//20일차
//공 던지기
//머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

// function solution(numbers, k) {
//   let idx = 0;

//   for (let i = 0; i < k; i++) {
//     idx += 2;
//     if (idx > numbers.length) {
//       idx -= numbers.length;
//     }
//   }

//   return idx - 2 > 0 ? numbers[idx - 2] : numbers[numbers.length + (idx - 2)];
// }

// //다른 사람 풀이
// function solution(numbers, k) {
//   return numbers[(2 * (k - 1)) % numbers.length];
// }

//문자열 계산하기
//my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

// function solution(my_string) {
//   const arrS = my_string.split(' ');
//   let answer = parseInt(arrS[0]);

//   for (let i = 1; i < arrS.length; i++) {
//     if (arrS[i] === '+') {
//       answer += parseInt(arrS[i + 1]);
//     } else if (arrS[i] === '-') {
//       answer -= parseInt(arrS[i + 1]);
//     } else {
//       continue;
//     }
//   }

//   return answer;
// }

// //다른 사람 풀이
// function solution(my_string) {
//   const stack = [];

//   let sign = 1;
//   for (const ch of my_string.split(' ')) {
//     if (ch === '+') {
//       sign = 1;
//     } else if (ch === '-') {
//       sign = -1;
//     } else {
//       stack.push(ch * sign);
//     }
//   }

//   return stack.reduce((a, b) => a + b, 0);
// }

//영어가 싫어요
//영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// function solution(numbers) {
//   const numObj = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   const num = numbers.replace(
//     /zero|one|two|three|four|five|six|seven|eight|nine/g,
//     (v) => numObj[v]
//   );

//   return parseInt(num);
// }

// //다른 사람 풀이
// function solution(numbers) {
//   const number = [
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
//   for (let i = 0; i < number.length; i++) {
//     numbers = numbers.split(number[i]).join(i);
//   }
//   return +numbers;
// }

//21일차
//구슬을 나누는 경우의 수
//머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

// function solution(balls, share) {
//   //경우의수 공식 = (n-m)! * m! / n!

//   const factorial = (n) => {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   };

//   return Math.round(
//     factorial(balls) / (factorial(balls - share) * factorial(share))
//   );
// }

//캐릭터의 좌표
//머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

// function solution(keyinput, board) {
//   let resultX = 0;
//   let resultY = 0;
//   const maxWidth = Math.floor(board[0] / 2);
//   const maxHeight = Math.floor(board[1] / 2);

//   for (let i = 0; i < keyinput.length; i++) {
//     let input = keyinput[i];

//     if (input === 'right' && resultX < maxWidth) resultX++;
//     if (input === 'left' && resultX > maxWidth * -1) resultX--;
//     if (input === 'up' && resultY < maxHeight) resultY++;
//     if (input === 'down' && resultY > maxHeight * -1) resultY--;
//   }

//   return [resultX, resultY];
// }

//22일차
//외계어 사전
//PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

//실패 : 문제를 꼼꼼히 읽자 제발
// function solution(spell, dic) {
//   const results = [];
//   dic.forEach((word) => {
//     let resultOfSpell = false;

//     spell.forEach((char) => {
//       if (word.includes(char)) resultOfSpell = true;
//     });

//     results.push(resultOfSpell);
//   });

//   return results.every((result) => result === true) ? 1 : 2;
// }

// //성공
// function solution(spell, dic) {
//   const result = [];

//   dic.forEach((word) => {
//     //단어별로 확인
//     const arrWord = [];

//     spell.forEach((char) => {
//       let resultOfWord = false;

//       if (word.includes(char)) resultOfWord = true;
//       else resultOfWord = false;

//       arrWord.push(resultOfWord);
//     });

//     //단어별로 결과 넣기
//     result.push(arrWord.every((item) => item));
//   });

//   return result.some((item) => item) ? 1 : 2;
// }

// //다른 사람 풀이
// function solution(p, d) {
//   return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
// }

//23일차
//로그인 성공?
//머쓱이는 프로그래머스에 로그인하려고 합니다. 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.
//아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다. 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

// function solution(id_pw, db) {
//   for (let i = 0; i < db.length; i++) {
//     if (db[i][0] === id_pw[0]) {
//       return db[i][1] === id_pw[1] ? 'login' : 'wrong pw';
//     }
//   }
//   return 'fail';
// }

//24일차
//직사각형 넓이 구하기
//2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

// function solution(dots) {
//   const arrWidth = dots.reduce(
//     (acc, cur) => [...acc, cur[0]].sort((a, b) => a - b),
//     []
//   );
//   const arrHeight = dots.reduce(
//     (acc, cur) => [...acc, cur[1]].sort((a, b) => a - b),
//     []
//   );

//   const width = arrWidth[3] - arrWidth[0];
//   const height = arrHeight[3] - arrHeight[0];

//   return width * height;
// }

// //다른 사람 풀이
// //for(of)문 사용!
// function solution(dots) {
//   let x = [],
//     y = [];

//   for (let pos of dots) {
//     x.push(pos[0]);
//     y.push(pos[1]);
//   }

//   return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
// }

//종이 자르기
//머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다. 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

// function solution(M, N) {
//   if (M === 1 && N === 1) return 0;

//   const cutWidth = N - 1;
//   const cutHeight = (M - 1) * N;

//   return cutWidth + cutHeight;
// }

// //다른 사람 풀이
// function solution(M, N) {
//   return M * N - 1;
// }

//25일차
//치킨 쿠폰
//프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.

// function solution(chicken) {
//   let freeChicken = 0;
//   let restCoupon = 0;

//   while (chicken > 1) {
//     freeChicken += Math.floor(chicken / 10);
//     restCoupon += chicken % 10;
//     chicken /= 10;
//   }

//   if (restCoupon >= 10) {
//     freeChicken += Math.floor(restCoupon / 10);
//   }

//   return freeChicken;
// }

// //다른 사람 풀이
// //해설 : 서비스를 받고 다음 서비스를 받기 까지는 9개의 구매가 매번 필요함. 근데 왜 9인가 하면 나머지 한번은 서비스가 채워줬기 때문입니다. 서비스 1번 + 내돈대산 9번으로 10번이 되어서 새로운 서비스 치킨이 생기는거죠. 그런데 첫 서비스 치킨은 서비스 치킨 없이 전부 내돈내산 해야 합니다. 내돈내산으로 10을 해야하죠. 그래서 1을 뺍니다.
// function solution(chicken) {
//   var answer = parseInt((chicken - 1) / 9);
//   return answer;
// }

//등수 매기기
//영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(score) {
//   const arrAverage = score.map((student) => {
//     return (student[0] + student[1]) / 2;
//   });
//   const arrRank = [...arrAverage].sort((a, b) => b - a);

//   return arrAverage.map((score) => {
//     return arrRank.indexOf(score) + 1;
//   });
// }

//저주의 숫자 3
//3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   let answer = 0;

//   for (let i = 1; i <= n; i++) {
//     answer += 1;

//     while (true) {
//       if (answer % 3 === 0 || answer.toString().includes('3')) {
//         answer += 1;

//         continue;
//       }
//       break;
//     }
//   }

//   return answer;
// }

// //다른 사람 풀이
// function solution(n) {
//   var answer = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0) {
//       n++;
//     }
//     if (String(i).includes('3') & (i % 3 != 0)) {
//       n++;
//     }
//   }
//   return n;
// }

//26일차
//유한소수 판별하기
//소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다. 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다. 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

// function solution(a, b) {
//   const funcGCD = (a, b) => {
//     return a % b === 0 ? b : funcGCD(b, a % b);
//   };
//   const gcd = funcGCD(a, b);
//   let reducedD = b / gcd;

//   while (reducedD % 2 === 0) {
//     reducedD /= 2;
//   }

//   while (reducedD % 5 === 0) {
//     reducedD /= 5;
//   }

//   return reducedD === 1 ? 1 : 2;
// }

//27일차
//OX퀴즈
//덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(quizs) {
//   const answer = quizs.map((quiz) => {
//     const splitedQ = quiz.split(' ');
//     switch (splitedQ[1]) {
//       case '+':
//         return +splitedQ[0] + +splitedQ[2] === +splitedQ[4] ? 'O' : 'X';
//         break;
//       case '-':
//         return +splitedQ[0] - +splitedQ[2] === +splitedQ[4] ? 'O' : 'X';
//         break;
//     }
//   });

//   return answer;
// }

// //다른 사람 풀이
// //구조분해할당 사용!
// function solution(quiz) {
//   let answer = [];
//   quiz.forEach((val) => {
//     const [x, sign, y, , z] = val.split(' ');
//     let sum = 0;
//     if (sign === '+') {
//       sum = Number(x) + Number(y);
//     } else {
//       sum = Number(x) - Number(y);
//     }
//     sum === Number(z) ? answer.push('O') : answer.push('X');
//   });
//   return answer;
// }

//28일차
//소인수분해
//소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(n) {
//   const answer = new Set();

//   for (let i = 2; i <= n; i++) {
//     while (n % i === 0) {
//       answer.add(i);
//       n /= i;
//     }
//   }

//   return [...answer];
// }

//삼각형의 완성조건
//선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다. 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다. 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

// function solution(sides) {
//   const max = Math.max(...sides);
//   const min = Math.min(...sides);
//   const answer = [];
//   //가장 긴변이 sides에 있는 경우
//   //max < min + x
//   //max - min < x <= max
//   for (let x = max - min + 1; x <= max; x++) {
//     answer.push(x);
//   }

//   //가장 긴변이 sides에 없는 경우
//   //max < x < max+min
//   for (let x = max + 1; x < max + min; x++) {
//     answer.push(x);
//   }

//   return answer.length;
// }

// //다른 사람 풀이
// //수학 공식인가...
// function solution(sides) {
//   return Math.min(...sides) * 2 - 1;
// }

//29일차
/**
 * 다항식 더하기
 *
 * 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.
 */

// function solution(polynomial) {
//   const splitedPoly = polynomial.split(" + ");
//   const nArr = splitedPoly.filter((num) => !num.includes("x"));
//   const xArr = splitedPoly.filter((num) => num.includes("x"));

//   let numX =
//     xArr.length > 0
//       ? xArr
//           .map((itemX) =>
//             +itemX.replace("x", "") ? +itemX.replace("x", "") : 1
//           )
//           .reduce((acc, cur) => (acc += cur), 0)
//       : "";
//   let numN =
//     nArr.length > 0
//       ? nArr.map((itemN) => +itemN).reduce((acc, cur) => (acc += cur), 0)
//       : "";

//   if (numX && numN) return `${numX === 1 ? "" : numX}x + ${numN}`;
//   if (!numX) return String(numN);
//   if (!numN) return `${numX === 1 ? "" : numX}x`;
// }

/**
 * 다음에 올 숫자
 *
 * 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.
 */

// function solution(common) {
//   //등차수열?
//   if (common[1] - common[0] === common[2] - common[1]) {
//     const gap = common[1] - common[0];
//     return common[common.length - 1] + gap;
//   }

//   //등비수열?
//   if (common[1] / common[0] === common[2] / common[1]) {
//     const gap = common[1] / common[0];
//     return common[common.length - 1] * gap;
//   }
// }

/**
 * 연속된 수의 합
 *
 * 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.
 */

// function solution(num, total) {
//   const midNum = total / num;
//   const start = Math.ceil(midNum - (num - 1) / 2);

//   return Array.from({ length: num }, (_, i) => start + i);
// }

//30일차
/**
 * 분수의 덧셈
 *
 * 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 */

// function solution(num1, den1, num2, den2) {
//   let answer = [];
//   //공통분모, 새로운 분자 구하기
//   const denoms = den1 * den2;
//   const numers = num1 * den2 + num2 * den1;

//   const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
//   const divisor = gcd(numers, denoms);

//   answer[0] = numers / divisor;
//   answer[1] = denoms / divisor;

//   return answer;
// }

/**
 * 문자열 밀기
 *
 * 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
 */

// function solution(A, B) {
//   const arrA = A.split("");

//   for (let i = 0; i < arrA.length; i++) {
//     if (A === B) {
//       return i;
//     } else {
//       arrA.unshift(arrA.pop());
//       if (arrA.join("") === B) return i + 1;
//     }
//   }

//   return -1;
// }

//31일차
/**
 * 안전지대
 *
 * 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다. 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다. 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
 */

// function solution(board) {
//   const totalBoard = board.length ** 2;
//   let mines = [];

//   //보드 순회
//   for (let i = 0; i < board.length; i++) {
//     //열 순회
//     for (let j = 0; j < board.length; j++) {
//       if (board[i][j] === 1) mines.push([i, j]);
//     }
//   }

//   //델타배열
//   const directions = [
//     [-1, 0],
//     [1, 0],
//     [0, -1],
//     [0, 1], // 상, 하, 좌, 우
//     [-1, -1],
//     [-1, 1],
//     [1, -1],
//     [1, 1] // 좌상, 우상, 좌하, 우하 (대각선)
//   ];

//   for (let [x, y] of mines) {
//     for (let [dx, dy] of directions) {
//       let nx = x + dx;
//       let ny = y + dy;

//       if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length) {
//         if (board[nx][ny] === 0) {
//           board[nx][ny] = -1;
//         }
//       }
//     }
//   }

//   //2차원 배열 => 1차원 전환 후 0의 갯수 세기
//   const safePoint = board.flat().filter((point) => point === 0);
//   return safePoint.length;
// }

//32일차
/**
 * 특이한 정렬
 *
 * 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.
 */

// function solution(numlist, n) {
//   const compareFn = (a, b, n) => {
//     const gapA = Math.abs(a - n);
//     const gapB = Math.abs(b - n);

//     if (gapA === gapB) return b - a;
//     return gapA - gapB;
//   };

//   return numlist.sort((a, b) => compareFn(a, b, n));
// }

//33일차
/**
 * 평행
 * 
 * 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
 */

// function solution(dots) {
//   let result = 0;
//   //1. [0,1]와 [2,3] 비교
//   const lineOneToTwo =
//     Math.abs(dots[1][1] - dots[0][1]) / Math.abs(dots[1][0] - dots[0][0]);
//   const lineThreeToFour =
//     Math.abs(dots[3][1] - dots[2][1]) / Math.abs(dots[3][0] - dots[2][0]);

//   if (lineOneToTwo === lineThreeToFour) result = 1;

//   //2. [0,2]과 [1,3] 비교
//   const lineOneToThree =
//     Math.abs(dots[2][1] - dots[0][1]) / Math.abs(dots[3][0] - dots[1][0]);
//   const lineTwoToFour =
//     Math.abs(dots[3][1] - dots[1][1]) / Math.abs(dots[3][0] - dots[1][0]);

//   if (lineOneToThree === lineTwoToFour) result = 1;

//   //3. [0,3]와 [1,2] 비교
//   const lineOneToFour =
//     Math.abs(dots[3][1] - dots[0][1]) / Math.abs(dots[3][0] - dots[0][0]);
//   const lineTwoToThree =
//     Math.abs(dots[2][1] - dots[1][1]) / Math.abs(dots[2][0] - dots[1][0]);

//   if (lineOneToFour === lineTwoToThree) result = 1;

//   return result;
// }

//다른 사람 풀이
//함수로 따로 분리하면 훨씬 가독성 좋은 코드로 만들 수 있다.
// function solution(dots) {
//   if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
//     return 1;
//   if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
//     return 1;
//   if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
//     return 1;
//   return 0;
// }

// function calculateSlope(arr1, arr2) {
//   return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
// }

//리팩토링 해보기
//첫 시도는 forEach => forEach는 내부return이 함수를 강제종료할 수 없다!
//for of문으로 수정
// function solution2(dots) {
//   const calculateSlope = ([x1, y1], [x2, y2]) =>
//     Math.abs(y2 - y1) / Math.abs(x2 - x1);

//   const pairs = [
//     [dots[0], dots[1], dots[2], dots[3]],
//     [dots[0], dots[2], dots[1], dots[3]],
//     [dots[0], dots[3], dots[1], dots[2]]
//   ];

//   for (let pair of pairs) {
//     if (calculateSlope(pair[0], pair[1]) === calculateSlope(pair[2], pair[3])) {
//       return 1;
//     }
//   }

//   return 0;
// }

//34일차
/**
 * 겹치는 선분의 길이
 *
 * 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.
 */

//문제해결 실패
// function solution(lines) {
//   lines.sort((a, b) => a[0] - b[0]);

//   //(0,1) 겹치는 구간 확인
//   let abLength = 0;
//   let dotsAb = [];
//   if (lines[0][1] > lines[1][0]) {
//     const start = Math.max(lines[0][0], lines[1][0]);
//     const end = Math.min(lines[0][1], lines[1][1]);
//     abLength = end - start;
//     dotsAb = [start, end];
//   }

//   //(1,2) 겹치는 구간 확인
//   let bcLength = 0;
//   let dotsBc = [];
//   if (lines[1][1] > lines[2][0]) {
//     const start = Math.max(lines[1][0], lines[2][0]);
//     const end = Math.min(lines[1][1], lines[2][1]);
//     bcLength = end - start;
//     dotsBc = [start, end];
//   }

//   //중복으로 겹치는 구간 확인
//   let overlap = 0;
//   if (dotsAb.length > 0 && dotsBc.length > 0) {
//     const max = Math.max(dotsAb[0], dotsBc[0]);
//     const min = Math.min(dotsAb[1], dotsBc[1]);
//     if (min > max) {
//       overlap = min - max;
//     }
//   }

//   return abLength + bcLength - overlap;
// }

//다른 로직으로 구현
// function solution(lines) {
//   let points = Array(200).fill(0);

//   // 각 선분이 지나가는 구간을 기록
//   for (let [start, end] of lines) {
//     for (let i = start; i < end; i++) {
//       points[i + 100]++; // 음수 인덱스를 피하기 위해 +100
//     }
//   }

//   // 2개 이상 겹치는 부분의 길이를 세기
//   return points.filter((count) => count >= 2).length;
// }

//35일차
/**
 * 옹알이(1)
 *
 * 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
 */

// function solution(babbling) {
//   const nephewWord = ["aya", "ye", "woo", "ma"];

//   const result = babbling
//     .map((string) => {
//       return nephewWord.reduce((acc, word) => acc.replace(word, " "), string);
//     })
//     .filter((string) => !string.trim()).length;

//   return result;
// }

// //다른 사람 풀이: 정규식 활용, RegExp.test() 활용
// function solution(babbling) {
//   var answer = 0;
//   const regex = /^(aya|ye|woo|ma)+$/;

//   babbling.forEach((word) => {
//     if (regex.test(word)) answer++;
//   });

//   return answer;
// }

//36일차
/**
 * 기사 단원의 무기
 * 
 * 숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 기사들은 무기점에서 무기를 구매하려고 합니다.
각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. 단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.

예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다. 만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면, 15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다. 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.

기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때, 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.
 */

//시간초과
// function solution(number, limit, power) {
//   const soldiersPower = [];
//   for (let i = 1; i <= number; i++) {
//     const power = [];
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) power.push(j);
//     }

//     soldiersPower.push(power.length);
//   }

//   return soldiersPower.reduce((acc, cur) => {
//     return cur > limit ? (acc += power) : (acc += cur);
//   }, 0);
// }

//약수과 제곱근의 관계를 활용한 풀이 방법
// function solution(number, limit, power) {
//   const getPower = (n) => {
//     let count = 0;
//     for (let i = 1; i ** 2 <= n; i++) {
//       if (n % i === 0) {
//         count += i * i === n ? 1 : 2;
//       }
//     }
//     return count;
//   };

//   let totalPower = 0;

//   for (let i = 1; i <= number; i++) {
//     let soldierPower = getPower(i);
//     totalPower += soldierPower > limit ? power : soldierPower;
//   }

//   return totalPower;
// }

/**
 * 문자열 출력하기
 *
 * 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.
 */

//Node.js에서 작동하는 코드
// const readline = require("readline");
// const rl1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input1 = [];

// rl1
//   .on("line", function (line) {
//     input1 = [line];
//   })
//   .on("close", function () {
//     str = input1[0];
//     console.log(str);
//   });

/**
 * a와 b 출력하기
 *
 * 정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
 */

// const readline = require("readline");
// const rl2 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input2 = [];

// rl2
//   .on("line", function (line) {
//     input2 = line.split(" ");
//   })
//   .on("close", function () {
//     console.log(`a = ${input2[0]}
// b = ${input2[1]}`);
//   });

/**
 * 문자열 반복해서 출력하기
 * 
 * 문자열 str과 정수 n이 주어집니다.
str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
 */

// const readline = require("readline");
// const rl3 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input3 = [];

// rl3
//   .on("line", function (line) {
//     input3 = line.split(" ");
//   })
//   .on("close", function () {
//     str = input3[0];
//     n = Number(input3[1]);
//     console.log(str.repeat(n));
//   });

/**
 * 대소문자 바꿔서 출력하기
 *
 * 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
 */

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on("line", function (line) {
//   input = [line];
// }).on("close", function () {
//   str = input[0];
//   result = str
//     .split("")
//     .map((s) => (/[A-Z]/.test(s) ? s.toLowerCase() : s.toUpperCase()))
//     .join("");
//   console.log(result);
// });

//37일차
/**
 * 로또의 최고 순위와 최저 순위
 *
 * 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
 * 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
 */

//switch 문을 꼭 두번씩이나 써야하나라는 생각이 들었던 풀이...
// function solution(lottos, winNums) {
//   let best = 0;
//   let worst = 0;

//   let count = 0;
//   for (let i = 0; i < lottos.length; i++) {
//     for (let j = 0; j < winNums.length; j++) {
//       if (lottos[i] === winNums[j]) {
//         count++;
//       }
//     }
//   }

//   //0을 제외한 숫자 먼저 처리 = 최저순위
//   switch (count) {
//     case 0:
//       worst = 6;
//       break;
//     case 1:
//       worst = 6;
//       break;
//     case 2:
//       worst = 5;
//       break;
//     case 3:
//       worst = 4;
//       break;
//     case 4:
//       worst = 3;
//       break;
//     case 5:
//       worst = 2;
//       break;
//     case 6:
//       worst = 1;
//       break;
//   }

//   //0을 포함한 등수 처리 = 최고 순위
//   count += lottos.filter((num) => num === 0).length;
//   switch (count) {
//     case 0:
//       best = 6;
//       break;
//     case 1:
//       best = 6;
//       break;
//     case 2:
//       best = 5;
//       break;
//     case 3:
//       best = 4;
//       break;
//     case 4:
//       best = 3;
//       break;
//     case 5:
//       best = 2;
//       break;
//     case 6:
//       best = 1;
//       break;
//   }

//   return [best, worst];
// }

//다른 사람의 풀이 : 이렇게 간단한데 난 왜 굳이 switch를 두번씩이나 풀었는가...
// function solution(lottos, win_nums) {
//   const rank = [6, 6, 5, 4, 3, 2, 1];

//   let minCount = lottos.filter((v) => win_nums.includes(v)).length;
//   let zeroCount = lottos.filter((v) => !v).length;

//   const maxCount = minCount + zeroCount;

//   return [rank[maxCount], rank[minCount]];
// }

//38일차
/**
 * 옹알이(2)
 *
 * 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
 */

function solution(babbling) {
  const nephewWord = ["aya", "ye", "woo", "ma"];

  const result = babbling
    .map((str) => {
      if (nephewWord.some((word) => str.includes(word + word))) return str;

      while (nephewWord.some((word) => str.includes(word))) {
        for (let word of nephewWord) {
          str = str.replace(word, " ");
        }
      }

      return str;
    })
    .filter((str) => !str.trim()).length;

  return result;
}

//다른 사람 풀이 : 정규식 사용
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

//다른 사람 풀이 : 직관적 풀이
function solution(babbling) {
  const babblables = ["aya", "ye", "woo", "ma"];

  return babbling.reduce((possible, babbl) => {
    for (let i = 0; i < babblables.length; i += 1) {
      if (babbl.includes(babblables[i].repeat(2))) return possible;
    }

    for (let i = 0; i < babblables.length; i += 1) {
      babbl = babbl.split(babblables[i]).join(" ").trim();
    }

    if (babbl) return possible;

    return (possible += 1);
  }, 0);
}

/**
 * 특수문자 출력하기
 */
const readline1 = require("readline");
const rl1 = readline1.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl1.on("close", function () {
  console.log(`!@#$%^&*(\\'"<>?:;`);
});

/**
 * 덧셈식 출력하기
 * 
 * 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.
a + b = c
 */
const readline2 = require("readline");
const rl2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl2
  .on("line", function (line) {
    input = line.split(" ");
  })
  .on("close", function () {
    console.log(
      `${Number(input[0])} + ${Number(input[1])} = ${
        Number(input[0]) + Number(input[1])
      }`
    );
  });

/**
   * 문자열 붙여서 출력하기
   * 
   * 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다.
입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.
   */
const readline3 = require("readline");
const rl3 = readline3.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input3 = [];

rl3
  .on("line", function (line) {
    input3 = line.split(" ");
  })
  .on("close", function () {
    str1 = input3[0];
    str2 = input3[1];
    console.log(str1 + str2);
  });

/**
 * 문자열 돌리기
 * 
 * 문자열 str이 주어집니다.
문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
 */
const readline4 = require("readline");
const rl4 = readline4.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input4 = [];

rl4
  .on("line", function (line) {
    input4 = [line];
  })
  .on("close", function () {
    str = input4[0];
    str.split("").forEach((char) => {
      console.log(char);
    });
  });

/**
 * 홀짝 구분하기
 *
 * 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.
 */
const readline5 = require("readline");
const rl5 = readline5.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input5 = [];

rl5
  .on("line", function (line) {
    input5 = line.split(" ");
  })
  .on("close", function () {
    n = Number(input5[0]);
    n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
  });

/**
 * 문자열 겹쳐쓰기
 *
 * 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
 */
//해결 못한 시도 : replace의 경우 처음 등장하는 문자열을 반환하기 때문에 중복된 문자열의 경우 잘못된 부분을 치환할 수 있다.
function solution(my_string, overwrite_string, s) {
  const length = overwrite_string.length;
  const sliced = my_string.substring(s, s + length);
  return my_string.replace(sliced, overwrite_string);
}

//해결
function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}

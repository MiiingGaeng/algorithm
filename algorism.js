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

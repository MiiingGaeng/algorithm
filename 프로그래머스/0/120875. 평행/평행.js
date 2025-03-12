function solution(dots) {
    let result = 0
    //1. [0,1]와 [2,3] 비교
    const lineOneToTwo = Math.abs(dots[1][1] - dots[0][1]) / Math.abs(dots[1][0] - dots[0][0])
    const lineThreeToFour = Math.abs(dots[3][1] - dots[2][1]) / Math.abs(dots[3][0] - dots[2][0])
    
    if(lineOneToTwo === lineThreeToFour) result=1
    
    //2. [0,2]과 [1,3] 비교
    const lineOneToThree = Math.abs(dots[2][1] - dots[0][1]) / Math.abs(dots[3][0] - dots[1][0])
    const lineTwoToFour = Math.abs(dots[3][1] - dots[1][1]) / Math.abs(dots[3][0] - dots[1][0])
    
    if(lineOneToThree === lineTwoToFour) result=1
    
    //3. [0,3]와 [1,2] 비교
    const lineOneToFour = Math.abs(dots[3][1] - dots[0][1]) / Math.abs(dots[3][0] - dots[0][0])
    const lineTwoToThree = Math.abs(dots[2][1] - dots[1][1]) / Math.abs(dots[2][0] - dots[1][0])
    
    if(lineOneToFour === lineTwoToThree) result=1
    
    return result
}
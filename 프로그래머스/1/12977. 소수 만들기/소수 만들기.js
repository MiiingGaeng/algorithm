function solution(nums) {
    let count = 0;
    
    //소수 판별 함수
    function isDeciaml(num) {
        if (num < 2) return false;
        for (let i=2; i<=num/2; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    //요소 3개 더하기
    for (let i=0; i<nums.length-2; i++) {
        for (let j=i+1; j<nums.length-1; j++) {
            for (let k=j+1; k<nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (isDeciaml(sum)) count++;
            }
        }
    }
    return count;
}

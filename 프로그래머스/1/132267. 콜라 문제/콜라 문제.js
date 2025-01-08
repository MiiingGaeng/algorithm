function solution(a, b, n) {
    var count = 0;
    
    //빈병으로 못 바꿀 때까지 반복
    while(n >= a){
        let quotient = Math.floor(n / a) //몫
        let get = b * quotient //바꾼 콜라병의 수
        
        //전체 개수 = 총 - 바꾼 빈병 개수 + 바꾼 콜라병
        n = n % a + get
        count += get
    }
    
    return count
}
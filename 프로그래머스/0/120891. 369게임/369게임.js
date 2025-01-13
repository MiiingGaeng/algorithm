function solution(order) {
    return order.toString(10).split('').filter((num) => num < 10 && num> 0 && num % 3 ===0).length

}
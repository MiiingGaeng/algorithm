function solution(numbers) {
    const numObj = {
        zero:0,
        one:1,
        two:2,
        three:3,
        four:4,
        five:5,
        six:6,
        seven:7,
        eight:8,
        nine:9
    }
    
    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => numObj[v])
    
    return parseInt(num)
}
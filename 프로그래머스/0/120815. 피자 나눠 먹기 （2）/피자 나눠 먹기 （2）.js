function solution(n) {
    const gcd = (num1, num2) => num1 % num2 === 0 ? num2 : gcd(num2, num1%num2)
    const lcd = (num1, num2) => num1*num2 / gcd(num1,num2)
    
    return lcd(n,6) / 6
}
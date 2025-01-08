function solution(numbers) {
    numbers = numbers.sort((a,b) => a - b)
    let maxIndex = numbers.length - 1
    
    return numbers[maxIndex] * numbers[maxIndex - 1]
}
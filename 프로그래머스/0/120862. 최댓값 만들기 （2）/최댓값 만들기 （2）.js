function solution(numbers) {
    const sorted = numbers.sort((a,b) => b-a)
    const lastIdx = numbers.length -1

    return sorted[0]*sorted[1] > sorted[lastIdx]*sorted[lastIdx-1] ? sorted[0]*sorted[1] : sorted[lastIdx]*sorted[lastIdx-1]
}
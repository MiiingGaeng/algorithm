function solution(num, total) {
    const midNum = total / num;
    const start = Math.ceil(midNum - (num - 1) / 2);
    
    return Array.from({ length: num }, (_, i) => start + i);
}
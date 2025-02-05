function solution(dots) {
    const arrWidth = dots.reduce((acc, cur) => [...acc, cur[0]].sort((a,b) => a-b), [])
    const arrHeight = dots.reduce((acc, cur) => [...acc, cur[1]].sort((a,b) => a-b), [])
    
    const width = arrWidth[3] - arrWidth[0]
    const height = arrHeight[3] - arrHeight[0]
    
    return width * height
}
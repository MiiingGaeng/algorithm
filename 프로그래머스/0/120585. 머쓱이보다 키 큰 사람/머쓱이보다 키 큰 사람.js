function solution(array, height) {
    const taller = [];
    array.forEach((arr) => {
        if(arr > height) taller.push(arr)
    })
    
    return taller.length
}
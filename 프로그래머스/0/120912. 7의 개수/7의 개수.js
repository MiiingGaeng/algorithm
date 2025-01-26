function solution(array) {
    let count = 0
    const mappedArr = array.map((item) => item.toString().split(''))
    
    mappedArr.forEach((arr) => {
        arr.forEach((num) => {
            if(parseInt(num) === 7) count++
        })
    })
    
    return count
}
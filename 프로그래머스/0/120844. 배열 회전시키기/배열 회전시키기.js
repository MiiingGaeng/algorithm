function solution(numbers, direction) {
    if(direction === 'right'){
        const spliceArrR = numbers.splice(numbers.length -1 ,1)
        return spliceArrR.concat(numbers)
    }else if(direction === 'left'){
        const spliceArrL = numbers.splice(0, 1)
        return numbers.concat(spliceArrL)
    }
}
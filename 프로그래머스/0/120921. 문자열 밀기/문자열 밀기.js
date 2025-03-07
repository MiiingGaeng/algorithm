function solution(A, B) {
    const arrA = A.split('')

    for(let i=0; i<arrA.length; i++){
        if(A === B){
            return i
        }else{
            arrA.unshift(arrA.pop())
            if(arrA.join('') === B) return i + 1
        }
    }
    
    return -1
}
function solution(X, Y) {
    const arrX = [...X]
    const arrY = [...Y]
    let result = ""
    
    for(let i=0; i<=9; i++){
        let countX = arrX.filter((num) => parseInt(num) === i).length
        let countY = arrY.filter((num) => parseInt(num) === i).length
        
        if(countX && countY){
            const min = Math.min(countX, countY)
            result += String(i).repeat(min)
        }
    }

    if(!result) return "-1"
    if(result.split("").every((num) => num === "0")) return "0"
    return result.split('').sort((a,b) => parseInt(b)-parseInt(a)).join('')
}
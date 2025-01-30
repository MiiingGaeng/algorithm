function solution(keyinput, board) {
    let resultX = 0
    let resultY = 0
    const maxWidth = Math.floor(board[0] / 2)
    const maxHeight = Math.floor(board[1] / 2)

    for(let i=0; i<keyinput.length; i++){
        let input = keyinput[i]
        
        if(input === 'right' && resultX < maxWidth) resultX ++
        if(input === 'left' && resultX > maxWidth * -1) resultX --
        if(input === 'up' && resultY < maxHeight) resultY ++
        if(input === 'down' && resultY > maxHeight * -1) resultY --
    }
    
    return [resultX, resultY]
}
function solution(board) {
    const totalBoard = board.length ** 2
    let mines = [];
    
    //보드 순회
    for(let i=0; i<board.length; i++){
        //열 순회
        for(let j=0; j<board.length; j++){
            if(board[i][j] === 1) mines.push([i,j])
        }
    }
    
    //델타배열
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1],  // 상, 하, 좌, 우
        [-1, -1], [-1, 1], [1, -1], [1, 1] // 좌상, 우상, 좌하, 우하 (대각선)
    ];
    
    for(let [x,y] of mines){
        for(let [dx, dy] of directions){
            let nx = x + dx
            let ny = y + dy
            
            if(nx>=0&&nx<board.length&&ny>=0&&ny<board.length){
                if(board[nx][ny] === 0){
                    board[nx][ny] = -1
                }
            }
        }
    }
    
    //2차원 배열 => 1차원 전환 후 0의 갯수 세기
    const safePoint = board.flat().filter((point) => point === 0)
    return safePoint.length
}
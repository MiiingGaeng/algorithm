function solution(M, N) {
    if(M===1 && N===1) return 0
    
    const cutWidth = N-1
    const cutHeight = (M-1) * N
    
    return cutWidth + cutHeight
}
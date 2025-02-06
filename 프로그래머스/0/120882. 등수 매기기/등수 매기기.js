function solution(score) {
    const arrAverage = score.map((student) => {
        return (student[0] + student[1]) / 2
    })
    const arrRank = [...arrAverage].sort((a,b) => b-a)
    
    return arrAverage.map((score) => {
        return arrRank.indexOf(score) + 1
    })
}
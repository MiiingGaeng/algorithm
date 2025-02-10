function solution(quizs) {
    const answer = quizs.map((quiz) => {
        const splitedQ = quiz.split(' ')
        switch(splitedQ[1]){
            case '+' : 
                return (+splitedQ[0] + +splitedQ[2]) === +splitedQ[4] ? 'O' : 'X'
                break;
            case '-' : 
                return (+splitedQ[0] - +splitedQ[2]) === +splitedQ[4] ? 'O' : 'X';
                break;
            case '*' : 
                return (+splitedQ[0] * +splitedQ[2]) === +splitedQ[4] ? 'O' : 'X';
                break;
            case '/' : 
                return (+splitedQ[0] / +splitedQ[2]) === +splitedQ[4] ? 'O' : 'X';
                break;
        } 
    })
    
    return answer
}
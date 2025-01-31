function solution(spell, dic) {
    const result = []
    
    dic.forEach((word) => {
        const arrWord = []
        
        spell.forEach((char) => {
            let resultOfWord = false
                    
            if(word.includes(char)) resultOfWord = true
            else resultOfWord = false
            
            arrWord.push(resultOfWord)
        })
        
        result.push(arrWord.every((item) => item))
    })
    
    return result.some((item) => item) ? 1 : 2
}
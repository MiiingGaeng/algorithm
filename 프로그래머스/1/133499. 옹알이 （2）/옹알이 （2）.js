function solution(babbling) {
    const nephewWord = ["aya", "ye", "woo", "ma"]
    
    const result = babbling.map((str) => {
        if(nephewWord.some((word) => str.includes(word+word))) return str
        
        while(nephewWord.some((word) => str.includes(word))){
              for(let word of nephewWord){
                str = str.replace(word, " ")
            }
        }
            
        return str
    }).filter((str) => !str.trim()).length
    
    return result
}
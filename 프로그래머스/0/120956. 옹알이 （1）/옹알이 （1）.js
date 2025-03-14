function solution(babbling) {
    const nephewWord = ["aya", "ye", "woo", "ma"]
    
    const result =  babbling.map((string) => {
      return nephewWord.reduce((acc, word) => acc.replace(word, " "), string)
    }).filter((string) => !string.trim()).length
    
    return result
}
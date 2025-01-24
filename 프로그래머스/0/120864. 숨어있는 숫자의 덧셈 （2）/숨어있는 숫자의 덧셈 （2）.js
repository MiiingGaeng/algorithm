function solution(my_string) {
    const splited = my_string.split((/[A-z]/g))
    const filtered = splited.filter((item) => item)
    
    return filtered.length ? filtered.map((item) => parseInt(item)).reduce((acc, cur) => acc += cur) : 0
}
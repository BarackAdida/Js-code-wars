function solution(S){
    const letterCounts = {}
    for (const char of S){
        if (letterCounts[char]){
            letterCounts[char]++
        }else {
            letterCounts[char] = 1
        }
    }
    let deletions = 0
    for (const count of Object.values(letterCounts)) {
        if (count % 2 !== 0){
            deletions++
        }
    }
    return deletions
}
console.log(solution("barracc"))
console.log(solution("barrac"))
console.log(solution("barra dcc"))
console.log(solution("barracdcc"))
console.log(solution("barqqefracc"))
console.log(solution("barhnuhrurracc"))
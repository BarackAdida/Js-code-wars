function solution(S) {
    let sentences = S.split(/[.!?]/)

    let longestcount = 0

    sentences.forEach(sentence => {
        let words = sentence.trim().split(' ')

        let validwords = words.filter(word => /[a-zA-Z]/.test(word));
        let wordcount = validwords.length

        if (wordcount > longestcount){
            longestcount = wordcount
        }
    });
    return longestcount
}

console.log(solution("Lapilly is also Barack. He's a lazy man who does not take life seriously. Crazy man in did"))
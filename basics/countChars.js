const countChars = (text, letter) => {
    let sum = 0
    for (let i = 0; i <= text.length; i++) {
        if (text[i] === letter.toUpperCase() || text[i] === letter.toLowerCase()) {
            sum++;
        }
    }
    return sum;
}

console.log(countChars('MaaaariiishAAaaa', 'a'));




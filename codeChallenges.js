function addToZero(numArr) {
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            if (numArr[i]+numArr[j]===0) {
                return true
            }
        }
    }
    return false
}
console.log(addToZero([1, 2, 3, -2]));//true
console.log(addToZero([1, 2, 3]));//false
//Time: O(n^2)
//Space: O(1)

function uniqueChars(str) {
    str = str.toLowerCase().split('');
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i]===str[j] && i !== j) {
                return false
            }
        }
    }
    return true

}
console.log(uniqueChars("Monday"));//true
console.log(uniqueChars("Moonday"));//false
//Time: O(n^2)
//Space: O(n)

function isPanagram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    str = str.toLowerCase().split('')
    let count = 0;
    for (let i = 0; i < alphabet.length; i++) {
        if (str.includes(alphabet[i])) {
            count++
        }
    }
    if (count === 26) {
        return true
    } else { return false}
}
console.log(isPanagram('Sphinx of black quartz, judge my vow!'));//true
console.log(isPanagram('I like cats, but not mice"'));//false
//time: O(n^2)
//space: O(n)

function findLongestWord(strArr) {
    strArr.sort((a,b)=>b.length-a.length);
    return strArr[0].length
}
console.log(findLongestWord(["hi", "hello"]));
//time: O(n log n) 
//space: O(1)
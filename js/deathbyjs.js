//STEP 1
// function sortString(sentence) {
//     let lettersList = sentence.split('')
//     let result = ''

//     lettersList.sort()

//     result = lettersList.toString()
    
//     return result.replace(/,/g, '')
// }

// console.log(sortString('webmaster'))

//STEP 2
// function capitalizeEachWord(sentence) {
//     let wordsArray = sentence.split(' ')
//     let updatedWord
//     let updatedSentence = ''

//     for (let word of wordsArray) {
//         updatedWord = word.at(0).toUpperCase() + word.slice(1)
//         updatedSentence += updatedWord + ' '
//     }

//     updatedSentence.trim()

//     return updatedSentence
// }

// console.log(capitalizeEachWord('the quick brown fox'))

//STEP 3
// function countVowels(sentence) {
//     let onlyVowels = sentence.replaceAll(/[^aeiou]/g, '');

//     return onlyVowels.length
// }

// console.log(countVowels('The quick brown fox'))

//STEP 4
// function createID(iDLength) {
//     let newCharacter
//     let iDSequence = ''

//     for (let i = 0; i < iDLength; i++) {
//         do {
//             newCharacter = Math.floor(Math.random() * 75) + 48
//         } while ((newCharacter > 57 && newCharacter < 65) || (newCharacter > 90 && newCharacter < 97))
        
//         iDSequence += String.fromCharCode(newCharacter)
//     }

//     return iDSequence
// }

// console.log(createID(20))

//STEP 5
// function maxCountryName(countryList) {
//     countryList.sort(function(a, b){ return b.length - a.length});

//     return countryList[0]
// }

// console.log(maxCountryName(['Australia', 'Germany', 'United States of America', 'France', 'Equatorial Guinea', 'Mexico']))
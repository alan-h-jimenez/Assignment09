//STEP 1
// let userName = prompt('What is your name? ')

// alert(`Your name is ${userName.length} characters long`)

//STEP 2
// let userName = prompt('What is your name? ')
// let charLocation = -1

// do {
//     charLocation = Number.parseInt(prompt(`Enter a number between 1 and ${userName.length}: `))
//     if (charLocation < 1 || charLocation > userName.length) {
//         alert('That is not a valid number!')
//         charLocation = -1
//     }
// } while (charLocation == -1)

// alert(`The character number ${charLocation} in your name is "${userName.charAt(charLocation - 1)}"`)

//STEP 3
// let userFirstName = prompt('What is your first name? ')
// let userLastName = prompt('What is your last name? ')

// alert(`Your name is: ${userFirstName.concat(' ', userLastName)}`)

//STEP 4
// let sentence = 'The quick brown fox jumps over the lazy dog'

// alert(`The word "fox" is located at position ${sentence.indexOf('fox')} within the phrase "${sentence}"`)

//STEP 5
// let sentence = 'The quick brown fox jumps over the lazy fox'

// alert(`The last instance of the word "fox" is located at position ${sentence.lastIndexOf('fox')} within the phrase "${sentence}"`)

//STEP 6
// let userName = prompt('What is your full name? ')
// let sentence = 'The quick brown fox jumped over the lazy dog'

// alert(`${sentence.replace('the lazy dog', userName)}`)

//STEP 7
// let word = prompt('Please enter a word: ')
// let sentence = 'The quick brown fox jumps over the lazy dog'

// alert(`The result of searching for the word "${word}" is ${sentence.search(word)}`)

//STEP 8
// let old_string = 'The quick brown fox jumps over the lazy dog'
// let new_string = old_string.substring(31)

// alert(`${new_string.toUpperCase()}`)

//STEP 9
// let sentence = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '

// alert(`"${sentence.trim().toLowerCase()}"`)

//STEP 10
// let sentence = 'the quick brown fox jumps over the lazy dog'

// alert(`"${sentence.replace('t', 'T')}"`)
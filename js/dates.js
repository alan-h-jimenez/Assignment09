//STEP 1
// const monthNames = new Map([
//     [0, 'January'],
//     [1, 'February'],
//     [2, 'March'],
//     [3, 'April'],
//     [4, 'May'],
//     [5, 'June'],
//     [6, 'July'],
//     [7, 'August'],
//     [8, 'September'],
//     [9, 'October'],
//     [10, 'November'],
//     [11, 'December']
//   ])

// let dateString

// do {
//     dateString = prompt('Please enter a date (##/##/####): ')
//     if (dateString.match(/\d{1,2}\/\d{1,2}\/\d{4}/) == null) {
//         alert('The value entered does not comform with a date pattern (##/##/####).')
//         dateString = null
//     }
// } while (dateString == null)

// let userDate = new Date(dateString)
// let updatedDate = new Date(userDate.getTime())

// updatedDate.setMonth(updatedDate.getMonth() + 1)
// updatedDate.setDate(0)

// console.log(`In ${userDate.getFullYear()}, ${monthNames.get(userDate.getMonth())} has ${updatedDate.getDate()} days.`)

//STEP 2
// const monthNames = new Map([
//     [0, 'January'],
//     [1, 'February'],
//     [2, 'March'],
//     [3, 'April'],
//     [4, 'May'],
//     [5, 'June'],
//     [6, 'July'],
//     [7, 'August'],
//     [8, 'September'],
//     [9, 'October'],
//     [10, 'November'],
//     [11, 'December']
//   ])

// let dateString

// do {
//     dateString = prompt('Please enter a date (##/##/####): ')
//     if (dateString.match(/\d{1,2}\/\d{1,2}\/\d{4}/) == null) {
//         alert('The value entered does not comform with a date pattern (##/##/####).')
//         dateString = null
//     }
// } while (dateString == null)

// let userDate = new Date(dateString)

// console.log(`The name of the month in the date entered (${userDate.toDateString()}) is: ${monthNames.get(userDate.getMonth())}`)

//STEP 3
// const monthNames = new Map([
//     [0, 'January'],
//     [1, 'February'],
//     [2, 'March'],
//     [3, 'April'],
//     [4, 'May'],
//     [5, 'June'],
//     [6, 'July'],
//     [7, 'August'],
//     [8, 'September'],
//     [9, 'October'],
//     [10, 'November'],
//     [11, 'December']
//   ])

// let dateString

// do {
//     dateString = prompt('Please enter a date (##/##/####): ')
//     if (dateString.match(/\d{1,2}\/\d{1,2}\/\d{4}/) == null) {
//         alert('The value entered does not comform with a date pattern (##/##/####).')
//         dateString = null
//     }
// } while (dateString == null)

// let userDate = new Date(dateString)
// let result = 'falls'

// if (userDate.getDay() % 6 != 0 ) {
//     result = 'does not fall'
// }

// console.log(`The date entered (${userDate.toDateString()}) ${result} on a weekend.`)

//STEP 4
// const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

// let userDate = new Date()

// console.log(`${dayName[(userDate.getDay() + 6) % 7]} is the day prior to today.`)

//STEP 5
// const dayInitial = ['S','M','T','W','T','F','S']

// let userDate = new Date()

// console.log(`${dayInitial[userDate.getDay()]}`)
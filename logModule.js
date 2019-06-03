let fs = require('fs')

// Write a log file into a folder named logs at the root of the project, if exists, add a new line.
module.exports = (string) => {
  // Actual date
  let dateLogs = new Date()

  let month = dateLogs.getMonth() + 1
  let months = (month < 10 ? '0' + month : month)
  let days = (dateLogs.getDate() < 10 ? '0' + dateLogs.getDate() : dateLogs.getDate())

  let hours = (dateLogs.getHours() < 10 ? '0' + dateLogs.getHours() : dateLogs.getHours())
  let minutes = (dateLogs.getMinutes() < 10 ? '0' + dateLogs.getMinutes() : dateLogs.getMinutes())
  let seconds = (dateLogs.getSeconds() < 10 ? '0' + dateLogs.getSeconds() : dateLogs.getSeconds())

  // Text file name
  let logsName = dateLogs.getFullYear() + '_' + months + '_' + days + '_logs.txt'

  // Open and write or just write
  fs.appendFile('logs/' + logsName, '[' + hours + ':' + minutes + ':' + seconds + ']' + string + '\n', (err) => {
    if (err) throw err
  })
}

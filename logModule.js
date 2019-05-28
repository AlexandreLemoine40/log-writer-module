let fs = require('fs')

// Module d'écriture dans le fichier de logs
module.exports = (string) => {
  // Date actuelle
  let dateLogs = new Date()

  let months = (dateLogs.getMonth() < 10 ? '0' + dateLogs.getMonth() : dateLogs.getMonth())
  let days = (dateLogs.getDate() < 10 ? '0' + dateLogs.getDate() : dateLogs.getDate())


  let hours = (dateLogs.getHours() < 10 ? '0' + dateLogs.getHours() : dateLogs.getHours())
  let minutes = (dateLogs.getMinutes() < 10 ? '0' + dateLogs.getMinutes() : dateLogs.getMinutes())
  let seconds = (dateLogs.getSeconds() < 10 ? '0' + dateLogs.getSeconds() : dateLogs.getSeconds())

  // Nom du fichier de logs
  let logsName = dateLogs.getFullYear() + '_' + months + '_' + days + '_logs.txt'

  // Ouvre le fichier de log du jour si il existe, sinon le créer
  fs.appendFile('logs/' + logsName, '[' + hours + ':' + minutes + ':' + seconds + ']' + string + '\n', (err) => {
    if (err) throw err
  })
}



  const sql = require('mssql')
const config = {
  user: 'USUÁRIO',
  password: 'SENHA',
  database: 'SEU BANCO DE DADOS',
  server: 'IP DO BANCO DE DADOS',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    enableArithAbort: true,
    encrypt: false, // Altere para true para usar conexão com SSL
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}
  module.exports = config;
  
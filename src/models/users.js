// =========================================
// IMPORTACAO DE BIBLIOTECAS https://dynamoosejs.com/getting_started/Import
// =========================================
const dynamoose = require('dynamoose');

// =========================================
// CONFIGURA HOST DO BANCO DE DADOS
// =========================================
dynamoose.aws.sdk.config.update({
  region: 'us-east-1',
  accessKeyId: 'xxxx',
  secretAccessKey: 'xxxx',
});

dynamoose.aws.ddb.local();

// =========================================
// CONFIGURA OS CAMPOS DA TABELA
// =========================================
const User = new dynamoose.Schema(
  {
    email: {
      type: String,
      hashKey: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = dynamoose.model(`User`, User);

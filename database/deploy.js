const AWS = require('aws-sdk')
const exec = require('child_process').execSync
const users = require('./mock-data/users')
const swipes = require('./mock-data/swipes')
const matches = require('./mock-data/matches')

let profile
let region
let stage
let populate = true
let directory = __dirname

for (let i = 2; i < process.argv.length; i++) {
  let res = process.argv[i].split('=')
  validateParameters(res)
}

console.log('#########################################################')
console.log('# Deploying Commensal Database Infrastructure Stack..')
console.log('# AWS region: ' + region)
console.log('# AWS stage: ' + stage)
console.log('# AWS profile: ' + profile)
console.log('# Populate database: ' + populate)
console.log('#########################################################')

const credentials = new AWS.SharedIniFileCredentials({profile: profile || 'default'})
AWS.config.credentials = credentials
AWS.config.update({region: region})
const dynamodb = new AWS.DynamoDB()

let cfDeployCommand = `aws cloudformation deploy --template-file ./cloudformation.yml --stack-name commensal-db-stack --profile ${profile}`

console.log('\n' + `# Installing NPM packages.. #` + '\n')
exec('npm install', {
  cwd: directory,
  stdio: [0, 1, 2]
})

console.log('\n' + `# Deploying CloudFormation Stack.. #` + '\n')
let cfDeployOutput = runCommands(cfDeployCommand, {
  cwd: directory
}
)
console.log('# Output CF stack:', + '\n' + cfDeployOutput + '#' + '\n')

if (populate) {
  console.log('\n' + `# Populating tables with dummy data.. #` + '\n')
  insertUsers()
    .then((result) => console.log(result))
    .then(() => insertSwipes())
    .then((result) => console.log(result))
    .then(() => insertMatches())
    .then((result) => console.log(result))
    .catch((err) => console.log('Error in populating tables: ', err))
}

function runCommands (command, options) {
  try {
    let child = exec(command, options)
    child = String.fromCharCode.apply(null, child).trim()

    if (child.indexOf('Error') !== -1) {
      let err = new Error('Error in command:' + command)
      throw err
    }
    return child
  } catch (err) {
    console.log('Error in command:' + command)
  }
}

function validateParameters (param) {
  switch (param[0].toLowerCase()) {
    case 'profile':
      profile = param[1]
      break
    case 'region':
      region = param[1]
      break
    case 'stage':
      stage = param[1]
      break
    default:
      console.warn(`Ignoring invalid parameter ${param[0]} supplied value ${param[1]}` + '\n')
  }
}

function insertUsers () {
  return new Promise((resolve, reject) => {
    dynamodb.batchWriteItem(users.params, (err, data) => {
      if (err) {
        reject(err.stack)
      } else {
        resolve(data)
      }
    })
  })
}

function insertSwipes () {
  return new Promise((resolve, reject) => {
    dynamodb.batchWriteItem(swipes.params, (err, data) => {
      if (err) {
        reject(err.stack)
      } else {
        resolve(data)
      }
    })
  })
}

function insertMatches () {
  return new Promise((resolve, reject) => {
    dynamodb.batchWriteItem(matches.params, (err, data) => {
      if (err) {
        reject(err.stack)
      } else {
        resolve(data)
      }
    })
  })
}
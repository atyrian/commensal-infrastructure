const AWS = require('aws-sdk')
const exec = require('child_process').execSync

let profile
let region
let stage
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
console.log('#########################################################')

const credentials = new AWS.SharedIniFileCredentials({profile: profile || 'default'})
AWS.config.credentials = credentials
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
console.log('# Output CF stack:', cfDeployOutput + '#' + '\n')

function runCommands (command, options) {
  try {
    let child = exec(command, options)
    child = String.fromCharCode.apply(null, child).trim()

    if (child.indexOf('Error') !== -1) {
      let err = new Error('Error => :' + command)
      throw err
    }
    return child
  } catch (err) {
    console.log('Error in command :' + command)
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

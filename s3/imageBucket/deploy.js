const exec = require('child_process').execSync;

const directory = __dirname;
let stage;

for (let i = 2; i < process.argv.length; i++) {
  let res = process.argv[i].split('=');
  switch (res[0]) {
    case 'stage':
      stage = res[1];
      break
    default:
      throw Error(`Ignoring invalid parameter ${res[0]} supplied value ${res[1]}` + '\n');
  }
}

let cfDeployCommand = `aws cloudformation deploy --template-file ./cloudformation.yml --stack-name commensal-image-bucket-${stage} --parameter-overrides StageParameter=${stage}`;

exec(cfDeployCommand, {
  cwd: directory,
  stdio: [0, 1, 2],
});

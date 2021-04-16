import * as yargs from 'yargs'

const argv = yargs
  .command('hello', 'say hello')
  .command('hoge', 'fuga')
  .demandCommand(1)
  .help()
  .argv

switch (argv._[0]) {
  case 'hello':
    console.log('hello ysmt!')
    break;
  case 'hoge':
    console.log('hey hoge!')
  default:
    break;
}

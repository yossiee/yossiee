import * as yargs from 'yargs'

function getPercent(): number {
  const now = new Date()
  const startOfYear = new Date(`${now.getFullYear()}`).getTime()
  const endOfYear = new Date(`${now.getFullYear() + 1}`).getTime()

  return Math.round((now.getTime() - startOfYear) / (endOfYear - startOfYear) * 1000) / 10
}

function getBar(percent: number): string {
  return "▓".repeat(percent / 3) + "░".repeat((100 - percent) / 3)
}

const argv = yargs
  .option('dry-run', {
    alias: '-d',
    description: 'Only progress percent',
    demandCommand: false
  })
  .help()
  .argv
const percent = getPercent()
const message = `⏳ ${new Date().getFullYear()} is ${percent}% complete.
${getBar(percent)}`
const readme = `## Hi there! I'm [ysmtegsr](https://ysmtegsr.com/about?to=github) :stuck_out_tongue_winking_eye:

![](https://komarev.com/ghpvc/?username=ysmtegsr&style=flat-square&label=visitors&color=05122A)
[![progress](https://github.com/ysmtegsr/ysmtegsr/actions/workflows/progress.yml/badge.svg)](https://github.com/ysmtegsr/ysmtegsr/actions/workflows/progress.yml)

---

${message}

*inspired by [@ProgressBar202_](https://twitter.com/ProgressBar202_)*`

console.log(argv.dryRun ? message : readme)

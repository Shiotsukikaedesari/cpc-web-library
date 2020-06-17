const ora = require('ora')
const chalk = require('chalk')

const spinner = ora({interval: 300})

let info = text => {
  spinner.info(chalk.blueBright(text))
  spinner.start()
}
let error = text => {
  spinner.fail(chalk.redBright(text))
  spinner.start()
}
let warining = text => {
  spinner.fail(chalk.yellowBright(text))
  spinner.start()
}
let succeed = text => {
  spinner.succeed(chalk.greenBright(text))
  spinner.start()
}

let start = text => {
  spinner.start(text)
}

let stop = () => {
  spinner.stop()
}

module.exports = {
  spinner,
  info,
  error,
  warining,
  succeed,
  stop,
  start
}

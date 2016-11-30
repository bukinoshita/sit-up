#!/usr/bin/env node

'use strict'

const meow = require('meow')
const timer = require('./lib/timer')
const notification = require('./lib/notification')

const cli = meow(`
  Usage
    $ sit-up
    $ sit-up <time>

  Examples
    $ sit-up (default: 5)
    $ sit-up 10

  Options
    -h, --help Help
`)

const prop = cli.input[0]

if (cli.flags.help || cli.flags.h) {
  cli.showHelp()
} else {
  const newTimer = timer(prop)
  const timerInMinutes = newTimer / 60000
  
  notification()
  console.log(`Sit up straight and we will remind you again in ${timerInMinutes} minutes.`)
  
  setInterval(() => notification(), newTimer)
}

#!/usr/bin/env node

'use strict'

const meow = require('meow')

const timer = require('./lib/timer')
const notification = require('./lib/notification')

const cli = meow(`
  Usage
    $ sit-up                  Remind to sit straight every 5 minutes
    $ sit-up <time>           Remind to sit straight every X minutes

  Examples
    $ sit-up (default: 5)
    $ sit-up 10

  Options
    -h, --help                Show help options
    -v, --version             Show version
`)

const prop = cli.input[0]
const newTimer = timer(prop)
const timerInMinutes = newTimer / 60000

notification()
console.log(
  `Sit up straight and we will remind you again in ${timerInMinutes} minutes.`
)

setInterval(() => notification(), newTimer)

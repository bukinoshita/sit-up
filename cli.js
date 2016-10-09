#!/usr/bin/env node

'use strict'

const meow = require('meow')
const notify = require('osx-notifier')
const timer = require('./lib/timer')

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
  let timerInMinutes = newTimer / 60000

  console.log(`Sit up straight and go to work! We will remind you again in ${timerInMinutes} minutes.`)

  setInterval(() => {
    notify({
      type: 'info',
      title: 'Hey Bro!',
      message: 'Sit up straight!!!!!',
    })
  }, newTimer)
}

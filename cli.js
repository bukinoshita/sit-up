#!/usr/bin/env node

'use strict'

const notify = require('osx-notifier')
const interval = 60 * 5000

const notification = () => {
  notify({
    type: 'info',
    title: 'Hey Bro!',
    message: 'Sit up straight!!!!!',
  })
}

console.log('Sit up straight and go to work! We will remind you again in 5 minutes')

setInterval(() => {
  notification()
}, interval)

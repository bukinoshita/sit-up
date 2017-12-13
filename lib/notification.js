'use strict'

const path = require('path')
const notifier = require('node-notifier')

module.exports = () =>
  notifier.notify({
    title: 'Hey!',
    message: 'Sit up straight ☺️',
    icon: path.join(process.cwd(), 'chair.png'),
    sound: true
  })

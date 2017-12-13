'use strict'

const path = require('path')
const notifier = require('node-notifier')

module.exports = () =>
  notifier.notify({
    title: 'Hey!',
    message: 'Sit up straight ☺️',
    icon: path.join(__dirname, './../chair.png'),
    sound: true
  })

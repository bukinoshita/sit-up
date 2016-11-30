'use strict'

const notifier = require('node-notifier')
const path = require('path')

module.exports = () => notifier.notify({
  title: 'Hey!',
  message: 'Sit up straight ☺️',
  icon: path.join(__dirname, './../chair.png'),
  sound: true
})

'use strict'

const path = require('path')
const { notify } = require('node-notifier')

module.exports = () =>
  notify({
    title: 'Hey!',
    message: 'Sit up straight ☺️',
    icon: path.join(__dirname, './../chair.png'),
    sound: true
  })

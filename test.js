'use strict'

import test from 'ava'
import timer from './lib/timer'

test('should return 5 minutes', t => t.is(timer(), 5 * 60000))
test('should be a number', t => t.is(typeof timer(2), 'number'))

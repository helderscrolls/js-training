'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code :

const yell = string => string.toUpperCase()

//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('bitch PleAse'), 'BITCH PLEASE')
// End of tests */
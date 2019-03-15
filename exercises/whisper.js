'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code :

const whisper = string => '\*' + string.toLowerCase() + '\*'
//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper('WORK BITCH'), '\*work bitch\*')
// End of tests */
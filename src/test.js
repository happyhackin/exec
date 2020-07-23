const assert = require('better-assert')
const {exec, spawn, execFile} = require('./index.js') 

it('run ls with exec', async () => {
  const result = await exec('ls /', {quiet: true})
  assert(result.code === 0)
  assert(result.stdout.indexOf('bin') !== -1)
  assert(result.exitType === 'close')
})

it('run ls with spawn', async () => {
  const result = await spawn('ls', ['/'], {quiet: true})
  assert(result.code === 0)
  assert(result.stdout.indexOf('bin') !== -1)
  assert(result.exitType === 'close')
})

it('run ls with execFile', async () => {
  const result = await execFile('/bin/ls', ['/'], {quiet: true})
  assert(result.code === 0)
  assert(result.stdout.indexOf('bin') !== -1)
  assert(result.exitType === 'close')
})

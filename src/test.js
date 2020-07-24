import {exec, spawn, execFile} from './index.js';

test('run ls with exec', async () => {
  // TODO: defaulte quiet to true
  const result = await exec('ls /', {quiet: true})
  assert(result.code === 0)
  assert(result.stdout.indexOf('bin') !== -1)
  assert(result.exitType === 'close')
})

test('run ls with spawn', async () => {
  const result = await spawn('ls', ['/'], {quiet: true})
  assert(result.code === 0)
  assert(result.stdout.indexOf('bin') !== -1)
  assert(result.exitType === 'close')
})

test('run ls with execFile', async () => {
  const result = await execFile('/bin/ls', ['/'], {quiet: true})
  assert(result.code === 0)
  assert(result.stdout.indexOf('bin') !== -1)
  assert(result.exitType === 'close')
})

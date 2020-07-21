const {exec} = require('./exec.js') 
describe('exec', () => {
  test('run ls', async () => {
    const result = await exec('ls /', {quiet: true})
    expect(result.code).toEqual(0)
    expect(result.stdout.indexOf('bin')).not.toEqual(-1)
    expect(result.exitType).toEqual('close')
  })
})

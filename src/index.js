const {exec, spawn, execFile} = require('child_process');
const {handleChildProcess} = require('./lib/handle-child-process.js')

module.exports.exec = (cmd, options={}) => {
  const child = exec(cmd, options)
  return handleChildProcess(child, options)
}

module.exports.spawn = (cmd, args, options) => {
  const child = spawn(cmd, args, options)
  return handleChildProcess(child, options)
}

module.exports.execFile = (cmd, args, options) => {
  const child = execFile(cmd, args, options)
  return handleChildProcess(child, options)
}

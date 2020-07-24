import * as childProcess from 'child_process'
import {handleChildProcess} from './lib/handle-child-process.js'

export const exec = (cmd, options={}) => {
  const child = childProcess.exec(cmd, options)
  return handleChildProcess(child, options)
}

export const spawn = (cmd, args, options) => {
  const child = childProcess.spawn(cmd, args, options)
  return handleChildProcess(child, options)
}

export const execFile = (cmd, args, options) => {
  const child = childProcess.execFile(cmd, args, options)
  return handleChildProcess(child, options)
}

module.exports.handleChildProcess = (child, options) => {
  return new Promise((resolve, reject) => {
    let completed = false
    let logged = ""
    let stdout = ""
    let stderr = ""

    const getDefaults = () => ({
      error: null,
      code: null,
      signal: null,
      stdout: stdout.trim(),
      stderr: stderr.trim(),
      logged: logged.trim(),
    })

    const createResult = (data) => {
      return Object.assign(child, getDefaults(), data)
    }

    const fail = (data) => {
      if(completed) return 
      completed = true
      reject({...data, failed: true , success: false})
    }
    
    const succeed  = (data) => {
      if(completed) return 
      completed = true
      resolve(createResult({...data, failed: false, success: true}))
    }

    child.stdout.on('data', (data) => {
      stdout += data.toString()
      logged += data.toString()
      if(!options.quiet)
        process.stdout.write(data.toString())
    })

    child.stderr.on('data', (data) => {
      stderr += data.toString()
      logged += data.toString()
      if(!options.quiet)
        process.stderr.write(data.toString())
    })
    
    child.on('disconnectd', () => {
      fail({exitType: 'disconnected' })
    })

    child.on('error', (error) => {
      fail({exitType: 'error', error})
    })

    child.on('signal', (signal) => {
      fail({exitType: 'signal', signal})
    })

    child.on('close', (code, signal) => {
      if(code != 0) 
        return fail({exitType: 'close', code, signal})
      succeed({exitType: 'close', code, signal})
    })
  })
}

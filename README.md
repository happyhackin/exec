# @happyhackin/exec
> promisifed exec

# Installation
* Run `npm i -S @happyhackin/exec`

# Usage
``` javascript
const {exec} require('@happyhackin/exec')

exec('ls /')
.then((success) => {
  // ... handle success
})
.catch((error) => {
  // ... handle error
})
```

``` javascript
const {spawn} require('@happyhackin/exec')

spawn('ls' ['/'])
.then((success) => {
  // ... handle success
})
.catch((error) => {
  // ... handle error
})
```

``` javascript
const {execFile} require('@happyhackin/exec')

execFile('/bin/ls' ['/'])
.then((success) => {
  // ... handle success
})
.catch((error) => {
  // ... handle error
})
```

## Handling the result
* resolved and rejected result data have same formatting
```
{
  ...subprocess,
  exitType: <string> -- close | dissconnect | error
  code: <number> |null
  signal: <string> | null
  error: <Error> | null
  failed: <boolean> 
  success: <boolean>
  stdout: <string> 
  stderr: <string>
  logged: <string> stdout + stderr in order of occurance
}
```

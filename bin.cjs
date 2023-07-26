#!/usr/bin/env node

const { join } = require('node:path')
const { spawn } = require('node:child_process')

const { scripts: availableScripts } = require(join(process.cwd(), 'package.json'))

process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H')

const requestedScripts = process.argv.filter((_, index) => index !== 0 && index !== 1)
const scripts = Object.fromEntries(
  Object.entries(availableScripts).filter(([key]) => requestedScripts.some((req) => {
    const regex = new RegExp(`^${req.replace('*', '.*')}$`)
    return regex.test(key)
  })),
)

async function runScripts() {
  const promises = []
  for (const script in scripts) {
    promises.push(
      new Promise((resolve, reject) => {
        const [command, ...args] = scripts[script].split(' ')
        const child = spawn(command, args, { shell: true, stdio: 'inherit' })
        child.on('close', (code) => {
          if (code !== 0)
            reject(new Error(`Script "${script}" failed with exit code ${code}`))
          else
            resolve()
        })
      }),
    )
  }
  try {
    await Promise.all(promises)
  }
  catch (error) {
    console.error(error)
  }
}
runScripts()

const path = require('path')
var fs = require('fs')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)

const webv1 = require(path.resolve(
  'src',
  'context',
  'web-v1.js'
))
const contextFiles = ['web-v1', 'ios-v1', 'android-v1']

exports.createPages = async () => {
  var contextDir = path.resolve('public', 'context')
  if (!fs.existsSync(contextDir)) {
    fs.mkdirSync(contextDir)
  }

  for (const contextFile of contextFiles) {
    const context = require(path.resolve(
      'src/context',
      `${contextFile}.js`
    ))
    const contextStr = JSON.stringify(context, null, 2)
    const jsonPath = path.resolve(
      contextDir,
      `${contextFile}.json`
    )
    await writeFile(jsonPath, contextStr)
    console.log(jsonPath, 'created')
  }
}

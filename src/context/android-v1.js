const common = require('./shared')
const { getPlatformClasses } = require('../schema')

const androidMapping = getPlatformClasses('android').reduce(
  (androidMapping, { id: className }) => {
    androidMapping[className.substr(8)] = className
    return androidMapping
  },
  {}
)

module.exports = {
  ...common,
  ...androidMapping
}

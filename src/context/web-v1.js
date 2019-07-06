const common = require('./shared')
const { getPlatformClasses } = require('../schema')

const webMapping = getPlatformClasses('web').reduce(
  (webMapping, { id: className }) => {
    webMapping[className.substr(4)] = className
    return webMapping
  },
  {}
)

module.exports = {
  ...common,
  ...webMapping
}

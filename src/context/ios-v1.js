const common = require('./shared')
const { getPlatformClasses } = require('../schema')

const iosMapping = getPlatformClasses('ios').reduce(
  (iosMapping, { id: className }) => {
    iosMapping[className.substr(4)] = className
    return iosMapping
  },
  {}
)

module.exports = {
  ...common,
  ...iosMapping
}

// 本地调试以及打包组件都需要的配置信息
const utils = require('./utils')

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'src': utils.resolve('src'),
            'components': utils.resolve('components'),
            'wrk-ui': utils.resolve('components/index.js'),
        }
    },
}

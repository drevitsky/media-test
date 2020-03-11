import config from '@/config/index.json'
// const isProduction = process.env.NODE_ENV === 'production'

export default {
  returnUrlPrefix() {
    // return isProduction ? '' : config.siteUrl // если не test
    return config.siteUrl
  }
}

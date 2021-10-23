import isProd from 'libs/utils/isProd'


const files = require.context('../../styles/img', true)


const resolveURL = url =>
  url ? 
    isProd() ?
      `https://the-sociophobic.github.io/cyberpunk-streetwear/${files(`./${url}`).default}`
      :
      files(`./${url}`).default
    :
    ""


export default resolveURL
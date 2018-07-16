export function getStyles(key) {
  /* eslint-disable */
  const variables = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../../configs/config-styles.scss')

  if (key instanceof Array) {
    const stylesArr = []

    for (let i = 0; i < key.length; i += 1) {
      const styleKey = key[i]

      if (variables[styleKey] && variables[styleKey].declarations.length) {
        const style = variables[styleKey].declarations[0].expression

        stylesArr.push(style)
      }
    }

    return stylesArr
  } else if ((typeof key === 'string') && variables[key]) {
    return variables[key]
  }

  return null
}

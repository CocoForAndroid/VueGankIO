module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      // options
      unitToConvert: 'px',
      viewportWidth: 750,
      fontViewportUnit: 'vw'
    }
  }
}

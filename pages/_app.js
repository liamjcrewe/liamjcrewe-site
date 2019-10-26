import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'
import '../public/global.css'

export default class ThemedApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

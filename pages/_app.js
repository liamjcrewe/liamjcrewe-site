import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

import React from 'react'
import App from 'next/app'

import '../public/global.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    tertiary: '#08c4e6'
  }
}

export default class ThemedApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

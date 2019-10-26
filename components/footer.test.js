import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import 'jest-styled-components'

import theme from '../theme'
import Footer from './footer'

describe('Footer component', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    )

    expect(container).toMatchSnapshot()
  })
})

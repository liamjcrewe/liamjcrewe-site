import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import 'jest-styled-components'

import theme from '../theme'
import IndexPage from './index'

describe('Index page', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <IndexPage />
      </ThemeProvider>
    )

    expect(container).toMatchSnapshot()
  })
})

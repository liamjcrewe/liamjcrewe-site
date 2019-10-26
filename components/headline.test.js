import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import 'jest-styled-components'

import theme from '../theme'
import Headline from './headline'

describe('Headline component', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Headline />
      </ThemeProvider>
    )

    expect(container).toMatchSnapshot()
  })
})

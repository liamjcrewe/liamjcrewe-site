import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import 'jest-styled-components'

import theme from '../theme'
import Layout from './layout'

describe('Layout component', () => {
  it('renders itself and its children and matches snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Layout>
          <span>Some content</span>
          <span>Some more content</span>
        </Layout>
      </ThemeProvider>
    )

    expect(container).toMatchSnapshot()
  })
})

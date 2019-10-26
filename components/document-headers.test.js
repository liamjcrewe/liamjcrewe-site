import { render } from '@testing-library/react'

import DocumentHeaders from './document-headers'

describe('DocumentHeaders component', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<DocumentHeaders />, {
      container: document.createElement('head')
    })

    expect(container).toMatchSnapshot()
  })
})

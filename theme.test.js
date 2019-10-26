import theme from './theme'

describe('Theme', () => {
  it('returns an object with required properties', () => {
    const expectedProperties = ['primary', 'secondary', 'tertiary']

    expect(theme).toHaveProperty('colors')
    expect(Object.keys(theme.colors)).toEqual(expect.arrayContaining(expectedProperties))
  })
})

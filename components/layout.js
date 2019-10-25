import styled from 'styled-components'

const S = {}

S.Layout = styled.div`
  min-height: 100vh;
  color: ${props => props.theme.colors.secondary};
  background: url(/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

S.Overlay = styled.div`
  min-height: inherit;
  background-color: rgba(0, 0, 0, 0.5);
`

const Layout = ({ children }) => (
  <S.Layout>
    <S.Overlay>{children}</S.Overlay>
  </S.Layout>
)

export default Layout

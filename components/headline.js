import styled from 'styled-components'

const S = {}

S.Container = styled.div`
  min-height: 20vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

S.Heading = styled.h1`
  font-size: 6rem;
  margin: 0;
  line-height: 1;
`

S.Subheading = styled.div`
  display: flex;
  justify-content: space-between;
`

S.Link = styled.a`
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.primary};
  padding: 5px 10px;
  border-radius: 15px;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`

const Headline = () => (
  <S.Container>
    <div>
      <S.Heading>Liam Crewe</S.Heading>
      <S.Subheading>
        <span>
          <S.Link href='mailto:liam.j.crewe@gmail.com'>Contact:</S.Link>
          <span> liam.j.crewe@gmail.com</span>
        </span>
        <span style={{ paddingRight: 5 }}>Software developer</span>
      </S.Subheading>
    </div>
  </S.Container>
)

export default Headline

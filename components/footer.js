import styled from 'styled-components'
import { GoMarkGithub } from 'react-icons/go'

const S = {}

S.Footer = styled.div`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

S.GithubIcon = styled.span`
  color: ${props => props.theme.colors.tertiary};
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const Footer = () => (
  <S.Footer>
    <a href='https://github.com/liamjcrewe' target='_blank'>
      <S.GithubIcon>
        <GoMarkGithub size={32} />
      </S.GithubIcon>
    </a>
  </S.Footer>
)

export default Footer

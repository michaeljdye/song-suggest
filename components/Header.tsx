import {FC} from 'react'
import styled from '@emotion/styled'

const Header: FC = () => {
  return (
  <HeaderS>
    <h1>Tab Finder</h1>
    <nav>
      <ul>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/sign-in">Sign In</a></li>
        <li><a href="/sign-up">Sign Up</a></li>
      </ul>
    </nav>
    </HeaderS>
    )
}

const HeaderS = styled.div`
  background: var(--colorDark);
  padding: 1.5rem;

  h1 {
    text-align: center;
    color: var(--colorWhite);
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 1rem 0 0 0;
  }

  li + li {
    margin-left: 1.5rem;
  }

  a {
    color: var(--colorWhite)
  }
`

export default Header

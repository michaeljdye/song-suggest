import {FC} from 'react'
import styled from '@emotion/styled'

const Header: FC = () => {
  return (
  <HeaderS>
    <h1>Song Suggest</h1>
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
`

export default Header

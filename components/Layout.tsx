import {FC} from 'react'
import { Global, css } from '@emotion/react'
import Header from './Header'

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Global
       styles={css`
          :root {
            --colorPrimary: #6fffe9;
            --colorPrimaryDark: #5bc0be;
            --colorSecondary: #3a506b;
            --colorSecondaryDark: #1c2541;
            --colorWhite: #ffffff;
            --colorDark: #0b132b;
          }

          body {
            margin: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          p {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Header />
      {children}
    </div>
  )
}

export default Layout

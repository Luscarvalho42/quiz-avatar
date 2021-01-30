import { ThemeProvider } from 'styled-components'
import db from '../db.json'
import GlobalStyle from '../src/styles/globalStyle'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

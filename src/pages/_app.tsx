import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar, ThemeChanger } from '../components'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={false}>
        <ThemeChanger />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

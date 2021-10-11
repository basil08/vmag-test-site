import { useEffect } from 'react'
import '../styles/scss/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  })
  return <Component {...pageProps} />
}

export default MyApp

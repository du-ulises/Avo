import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'

import CartProvider from '@store/Cart'
/*
export function reportWebVitals(metric) {
  console.log(metric)
}
*/
const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp

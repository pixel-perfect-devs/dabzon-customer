import '@/styles/globals.css'
import { store } from '../reduxStore/store'
import { Provider } from 'react-redux'
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

import '@/styles/globals.css'
import { store } from '../reduxStore/store'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    // check if cart exists in local storage
    if (localStorage.getItem('cart')) {
      // get cart from local storage
      const cart = JSON.parse(localStorage.getItem('cart'));
      // set cart in redux store
      store.dispatch({ type: 'cartslice/setCartFromLocalStorage', payload: cart })
    }
  }, [])

  return (
    <SessionProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

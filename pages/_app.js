import '../styles/globals.css'
import Router from 'next/router';
import Loader from './_loader';
import Head from 'next/head';
import { useEffect, useState } from 'react';
function MyApp({ Component, pageProps }) {
  const [loader, setloader] = useState(false);

	useEffect(() => {
		Router.events.on('refresh')
		Router.events.on('routeChangeStart', () => {
			setloader(true)
		});
		Router.events.on('routeChangeComplete', () => {
			setloader(false)
		});
		Router.events.on('routeChangeError', () => {
			setloader(false)
		});
	}, [])
  return <Component {...pageProps} />
}

export default MyApp

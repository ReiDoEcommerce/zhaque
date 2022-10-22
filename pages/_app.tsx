// import { useEffect } from "react";

import Head from "next/head";
// import Script from "next/script";
import { AppProps } from "next/app";
// import { useRouter } from "next/router";

import { CartProvider } from "src/contexts/CartContext";
import { AuthProvider } from "src/contexts/Auth/authContext";
import { ProfileProvider } from "src/contexts/Profile";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, {
  Thumbs,
  Virtual,
  FreeMode,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";

import "../styles/reset.css";
import "../styles/fonts.css";

import { GlobalStyle } from "../styles/global";
import { PaymentProvider } from "src/contexts/PaymentContext";
import { FavoriteProvider } from "src/contexts/Favorite";

// import * as fbq from "src/utils/fb-pixel";
// import ReactGA from 'react-ga';


SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs, FreeMode, Virtual]);

const App = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter();

  // useEffect(() => {
  //   if (process.browser) {
  //     const handleRouteChange = () => {
  //       fbq.pageview(router.asPath);
  //     };

  //     ReactGA.initialize('UA-197130039-1');
  //     ReactGA.pageview(router.asPath);

  //     router.events.on("routeChangeComplete", handleRouteChange);

  //     return () => {
  //       router.events.off("routeChangeComplete", handleRouteChange);
  //     };
  //   }

  // }, [router.events, router.pathname, router.asPath]);

  return (
    <>
      {/* <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '410009650117103');
          fbq('track', 'PageView');
          `,
        }}
      /> */}
      <ProfileProvider>
        <AuthProvider>
          <CartProvider>
            <PaymentProvider>
              <FavoriteProvider>
                <Head>
                  <title>Zhaque</title>
                  <link
                    rel="canonical"
                    href="https://zhaque.vercel.app/"
                  />
                  <link rel="icon" href="/favicon.ico" />

                  <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                  />
                  
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                  />
                  <meta name="robots" content="index, follow" />
                  <meta name="referrer" content="origin" />
                  <meta name="mobile-web-app-capable" content="yes" />
                  <meta name="apple-mobile-web-app-capable" content="yes" />
                  <meta name="rating" content="general" />
                  <meta
                    name="keyboard-shortcuts-preference"
                    content="all"
                  ></meta>

                  {/* <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-197130039-1"
                  ></script> */}
                </Head>

                <GlobalStyle />

                <Component {...pageProps} />
              </FavoriteProvider>
            </PaymentProvider>
          </CartProvider>
        </AuthProvider>
      </ProfileProvider>
    </>
  );
};

export default App;

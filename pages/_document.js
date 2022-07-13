import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                <Script
                    strategy='afterInteractive'
                    src={ `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}` } />
                <Script id="google-ats" strategy='afterInteractive'>
                    { `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        
                        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
                        `
                        }
                </Script>
                <Script id='google-tm' strategy='afterInteractive'>
                    {
                        `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER});
                        `
                    }
                </Script>
            </Head>
            <body>
                <noscript id="asdg">
                    <iframe src={ `https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER}` }
                        height={ 0 } width={ 0 } style={ { display: "none", visibility: "hidden" } }>
                    </iframe>
                </noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
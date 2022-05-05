import {
  Head, Main, NextScript, Html, DocumentContext,
} from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* this.props.styleTags */}
        {/* nprogress css */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />

        {/* proxima-novo font */}
        <link rel="stylesheet" href="https://use.typekit.net/iwq0uru.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// export default class MyDocument extends Document {
//  static getInitialProps({ renderPage }) {
//     const sheet = new ServerStyleSheet();
//     const page = renderPage(App => props =>
//        sheet.collectStyles(<App {...props} />)
//     );
//     const styleTags = sheet.getStyleElement();
//     return { ...page, styleTags };
//  }

//   render() {
//     return (
//       <Html>
//         <Head>
//           {/* this.props.styleTags */}
//           {/* nprogress css */}
//           <link rel="stylesheet" type="text/css" href="/nprogress.css" />

//           {/* proxima-novo font */}
//           <link rel="stylesheet" href="https://use.typekit.net/iwq0uru.css" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

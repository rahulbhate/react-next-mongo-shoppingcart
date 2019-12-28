// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: App => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: Component => Component,
      })

    // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous" />
        <link rel='stylesheet' href='/static/css/style.css' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mukta:300,400,700" /> 
        <link rel="stylesheet" href="/static/fonts/icomoon/style.css" />
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/css/magnific-popup.css" />
        <link rel="stylesheet" href="/static/css/jquery-ui.css" />
        <link rel="stylesheet" href="/static/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/static/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/static/css/aos.css" />
        </Head>
        <script src="static/js/jquery-3.3.1.min.js"></script>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://js.stripe.com/v2/"></script>
        <script src="/static/js/checkout.js"></script>
        <script src="/static/js/jquery-ui.js"></script>
        <script src="/static/js/popper.min.js"></script>
        <script src="/static/js/bootstrap.min.js"></script>
        <script src="/static/js/owl.carousel.min.js"></script>
        <script src="/static/js/jquery.magnific-popup.min.js"></script>
        <script src="/static/js/aos.js"></script>
        <script src="/static/js/main.js"></script>
      </Html>
    );
  }
}

export default MyDocument;

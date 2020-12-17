import React from "react";
import Head from "next/head";

// Material UI
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";

// Redux / Redux Persist
import { wrapper } from "../store/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Loading Component
import { FullBackdrop } from "../components/global/BackDrop";
function MyApp({ Component, pageProps }) {
  const store = useStore(state => state);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Loading</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <PersistGate persistor={store.__persistor} loading={<FullBackdrop />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </React.Fragment>
  );
}

export default wrapper.withRedux(MyApp);

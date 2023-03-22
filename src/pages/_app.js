import "@styles/globals.css";
import AppContext from "@context/AppContext";
import useInitialState from "../hooks/useInitialState";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <>
      <Head>
        <title>Yard sale store</title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

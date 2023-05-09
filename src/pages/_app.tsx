import "src/globals.css";
import type { AppProps } from "next/app";
import store from "src/store/index";
import { Provider } from "react-redux";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </>
  );
}

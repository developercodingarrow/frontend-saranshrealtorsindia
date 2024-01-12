import AuthContextApiProvider from "../ContextApi/AuthContextApi";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextApiProvider>
        <Component {...pageProps} />;
      </AuthContextApiProvider>
    </>
  );
}

import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { AuthProvider } from "../hooks/auth";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Container>
  );
}

export default MyApp;

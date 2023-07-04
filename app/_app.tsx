import "../styles/globals.css";
import RootLayout from "./layout";
export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: object;
}) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />;
      </RootLayout>
    </>
  );
}

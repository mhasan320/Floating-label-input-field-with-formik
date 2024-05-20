import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider, Loader } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
        <Component {...pageProps} />
    </MantineProvider>
  );
}

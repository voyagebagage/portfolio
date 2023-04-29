import { ColorModeScript } from "@chakra-ui/react";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import customTheme from "./styles/theme";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* <Suspense fallback={<Loading />}> */}
        <ThemeProvider>{children}</ThemeProvider>
        {/* </Suspense> */}
      </body>
    </html>
  );
}

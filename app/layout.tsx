import { ColorModeScript } from "@chakra-ui/react";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import customTheme from "./styles/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

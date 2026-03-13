import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';

export const metadata = { title: 'My App' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
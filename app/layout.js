import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://agentic-dd729cff.vercel.app'),
  title: 'A Puppy?s First Warm Meal',
  description:
    'A short, heartwarming tale of a poor puppy who finds work, warmth, and gratitude.',
  openGraph: {
    title: 'A Puppy?s First Warm Meal',
    description:
      'A short, heartwarming tale of a poor puppy who finds work, warmth, and gratitude.',
    url: 'https://agentic-dd729cff.vercel.app',
    siteName: 'A Puppy?s First Warm Meal',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'A Puppy?s First Warm Meal',
    description:
      'A short, heartwarming tale of a poor puppy who finds work, warmth, and gratitude.'
  },
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor: '#0b0f19',
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}


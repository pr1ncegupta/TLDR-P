import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: 'TL;DR - AI-Powered Text Analysis',
  description: 'Transform any text into clear, actionable insights using advanced AI agents. Get comprehensive summaries, sentiment analysis, quantitative insights, and key takeaways.',
  keywords: 'AI, text analysis, TL;DR, insights, natural language processing, summarization, sentiment analysis, Lyzr AI',
  authors: [{ name: 'Prince' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1d1d1f' }
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'TL;DR - AI-Powered Text Analysis',
    description: 'Transform any text into clear, actionable insights using advanced AI agents.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    siteName: 'TL;DR AI',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'TL;DR AI-Powered Text Analysis',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TL;DR - AI-Powered Text Analysis',
    description: 'Transform any text into clear, actionable insights using advanced AI agents.',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TL;DR AI" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
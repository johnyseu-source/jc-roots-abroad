import type { Metadata } from 'next';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'JC Roots Abroad - Handcrafted Personalised Gifts',
  description: 'Premium personalised gifts and home decor, crafted with meaning in Ireland. Unique gifts for homes, weddings, pets and businesses.',
  icons: {
    icon: '/logo.jpg',
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
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

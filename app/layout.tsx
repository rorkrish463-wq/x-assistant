import './globals.css';
import React from 'react';

export const metadata = {
  title: 'HumanWrite AI',
  description: 'Generate assignments, humanize text, and check AI detection.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

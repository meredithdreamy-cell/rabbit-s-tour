import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '中庚聚龙漫游指南',
    template: '%s | 中庚聚龙漫游指南',
  },
  description: '上海中庚聚龙酒店周边展览与美食打卡导览',
  keywords: [
    '中庚聚龙',
    '上海旅游',
    '展览',
    '博物馆',
    '美术馆',
    '美食',
    '旅游攻略',
  ],
  authors: [{ name: 'AI 智慧导览助手' }],
  generator: 'Coze Code',
  openGraph: {
    title: '中庚聚龙漫游指南',
    description: '上海中庚聚龙酒店周边展览与美食打卡导览',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

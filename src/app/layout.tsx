import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Jason Alvarez - Software Developer',
        template: '%s | Jason Alvarez'
    },
    description: 'Software Developer with a unique background in Industrial/Organizational Psychology. Specializing in React, Next.js, TypeScript, and human-centered design. Building accessible, efficient applications that solve real-world problems.',
    keywords: [
        'Jason Alvarez',
        'Software Developer',
        'React Developer',
        'Next.js',
        'TypeScript',
        'Psychology',
        'UX Developer',
        'San Francisco',
        'Full Stack Developer',
        'Web Development',
        'JavaScript'
    ],
    authors: [{ name: 'Jason Alvarez', url: 'https://jason-alvarez-portfolio.vercel.app' }],
    creator: 'Jason Alvarez',
    publisher: 'Jason Alvarez',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://jason-alvarez-portfolio.vercel.app'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://jason-alvarez-portfolio.vercel.app',
        title: 'Jason Alvarez - Software Developer',
        description: 'Software Developer with expertise in React, Next.js, and human-centered design. Building accessible applications that bridge psychology and technology.',
        siteName: 'Jason Alvarez Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Jason Alvarez - Software Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jason Alvarez - Software Developer',
        description: 'Software Developer specializing in React, Next.js, and human-centered design',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
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
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#f59e0b" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className={`${inter.className} bg-black text-white antialiased`}>
                <div className="flex flex-col md:flex-row min-h-screen">
                    <Sidebar />
                    <main className="flex-1 p-4">
                        <Navbar />
                        <div className="mt-4">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    );
}
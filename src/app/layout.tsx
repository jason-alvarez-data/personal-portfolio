import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Jason Alvarez - Portfolio',
    description: 'Personal portfolio website showcasing my work and skills',

};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-black text-white`}>
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
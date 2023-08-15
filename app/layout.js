import { Header, Footer } from '../components/index';

import { Manrope } from 'next/font/google'
import localFont from 'next/font/local';
const myFont = localFont({ src: '../public/fonts/Al_Veshion.ttf' });
const manrope = Manrope({ subsets: ['latin'] })

import './globals.scss'

export const metadata = {
    title: 'Iconik',
    description: 'be an icoN',
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className={manrope.className}
                suppressHydrationWarning={true}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    )
}

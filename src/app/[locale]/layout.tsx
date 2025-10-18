import { routing } from '@/I18n/routing'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import '../globals.css'
import Header from '../components/header'
import Link from 'next/link'
import Footer from '../components/footer'
type Props = {
 children: React.ReactNode
 params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
 const { locale } = await params
 if (!hasLocale(routing.locales, locale)) {
  notFound()
 }
 return (
  <html>
   <body>
    <NextIntlClientProvider>
     <Header locale={locale} />

    

         <nav>
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="hover:text-gray-300"></Link>
                </li>

                <li>
                  <Link href="/news" className="hover:text-gray-300"></Link>
                </li>
                 <li>
                  <Link href="/learn" className="hover:text-gray-300"></Link>
                </li>
                <li>
                  <Link href="/vakan" className="hover:text-gray-300"></Link>
                </li>
                 <li>
                  <Link href="/more" className="hover:text-gray-300"></Link>
                </li>
              </ul>
            </nav>
     {children}

      <Footer/>
    </NextIntlClientProvider>
   </body>
  </html>
 )
}

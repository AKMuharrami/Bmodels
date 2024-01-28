import './globals.css'
import { Inter } from 'next/font/google'
import { Cairo } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const cairo = Cairo({
  subsets:['arabic'],
  weight: ['700'],
  variable: '--font-cairo'
})

export const metadata = {
  title: {
    default:'مشاريع بلندر',
    // template:'%s - ODev'
  },
  description: 'مشاريع بلندر - الصف العاشر',
  openGraph: {
    title: 'مشاريع بلندر',
    description: 'نماذج ثلاية الأبعاد للصف العاشر'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.variable}>{children}</body>
    </html>
  )
}

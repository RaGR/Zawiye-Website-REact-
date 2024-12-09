import './globals.css'
import { Vazirmatn } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/header'
import Footer from '@/components/footer'

const vazirmatn = Vazirmatn({ subsets: ['arabic'] })

export const metadata = {
  title: 'گروه زاویه | ساخت آثار هنری ماندگار',
  description: 'وب‌سایت رسمی گروه مستندسازی زاویه',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.className} min-h-screen bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


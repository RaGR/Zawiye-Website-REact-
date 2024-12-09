import { Instagram, Mail, Phone, Youtube } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right space-y-4">
            <h2 className="text-2xl font-bold">این زاویه دید ماست</h2>
            <div className="space-y-2 text-lg">
              <p>گروه زاویه به شما کمک می‌کند تا ایده خود را به مستندی حرفه‌ای تبدیل کنید</p>
              <p>با زاویه دید خود مستند بسازید اما با کمک ما</p>
            </div>
          </div>
          <div className="space-y-4 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">ارتباط با ما</h3>
            <div className="flex justify-center md:justify-end space-x-4 space-x-reverse">
              <Link href="#" className="hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Phone className="h-6 w-6" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} گروه زاویه. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}

